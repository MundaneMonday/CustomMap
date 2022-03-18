const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const loginRoutes = require('./Routes/loginRoutes');
const journalsRoutes = require('./Routes/journalsRoute');
const profileRoutes = require('./Routes/profileRoute');
const cors = require('cors')
const mongoose = require("mongoose");
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);

const app = express();
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


const store = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: "mySession"
});



app.use(session({
    secret: "wellness-student",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, expires: 60000 },
    store:store
}));


app.use(loginRoutes);
app.use(journalsRoutes);
app.use(profileRoutes);

// Add error-handling middleware to deal with anything else
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    // We may already have an error response we can use, but if not, use a generic
    // 500 server error and message.
    const status = err.status || 500;
    const message = err.message || 'unable to process request';
  
  
    res.status(status).json({
      status: 'error',
      error: {
        message,
        code: status,
      },
    });
});
  
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


