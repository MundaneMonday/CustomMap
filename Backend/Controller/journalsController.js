const Register = require('../Model/Register');
const Mood = require('../Model/Mood');
const Journals = require('../Model/Journals');
const mongoose = require('mongoose');

exports.getJournals = async (req, res, next) => {
    const { userId } = req.body;
    try {
        const journals = await Journals.find({userId});
        return res.status(200).json({ journals, status: 200 });
    } catch (err) {
        throw err
    }
}

exports.postJournals = async(req, res, next) => {
    const {title,content,userId} = req.body;
    try {
        const isTitleExist = await Journals.findOne({ title });
        if (isTitleExist) {
            return res.status(409).json({ error:{message:'titile already exist',staus:409},staus:409});
        }
        let newJournals = new Journals({ title, content,userId });
        newJournals = await newJournals.save();
        return res.status(201).json({ data: { ...newJournals._doc, _id: newJournals_id }, status: 201 });
    } catch (err) {
        throw err
    }
}

exports.editJournals = async(req,res,next) => {
    const title = req.body?.title;
    const content = req.body?.content;
    const { journalId } = req.params;
    try {
        const journal = await Journals.findOne({ _id: journalId });
        if (!journal) {
            return res.status(403).json({ error: { message: 'user not found with this id', status: 403 }, status: 403 });
        }
        journal.title = title;
        journal.content = content;
        journal.save();
        return res.status(201).json({ data: journal, status: 201 });
    } catch (err) {
        throw err
    }
}

exports.deleteJournals = async(req, res, next) => {
    const { journalId } = req.params;
    try {
        const journal = await Journals.findOne({ _id: journalId });
        if (!journal) {
            return res.status(403).json({ error: { message: 'user not found with this id', status: 403 }, status: 403 });
        }
        await Journals.findOneAndDelete({ _id: journalsId });
        return res.status(200).json({message:'Item deleted successfully',status:200});
    } catch (err) {
        throw err
    }
}