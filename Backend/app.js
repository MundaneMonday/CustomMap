const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const loginRoutes = require('./Routes/loginRoutes');
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(loginRoutes);


const port = process.env.PORT || 3000

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        app.listen(port, () => {
            console.log(`Server is up at port ${port}`);
        });
    }
);


