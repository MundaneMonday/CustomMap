const express = require('express');
const routes = express.Router();
const journalsController = require('../Controller/journalsController');


// Authorization Middelware
const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next();
    } else {
        return res.redirect('/login');
    }
};

// GET ROUTE to fetch the journals
routes.get('/journals/:userId', journalsController.getJournals);

routes.post('/journal',journalsController.postJournals);

routes.put('/journal/:journalId', journalsController.editJournals);

routes.delete('/journal/:journalId', journalsController.deleteJournals);

module.exports = routes;