//Import modules

const express = require('express');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const port = 8080;
const schema = require('async-validator');
const bodyParser = require('body-parser');

 
 // Express Initialize
const app = express();

//env config
dotenv.config();

//decode usrl in simplest form
app.use(bodyParser.json());

//common routes
const signup = require('./controllers/sign_up');
const login = require('./controllers/login');


//fire
signup(app);
login(app);

//midleware
app.use(expressSession({secret: 'my top secret pass', resave: false, saveUninitialized: true}));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));

//set view engine
app.set('view engine', 'ejs');


//port listen
app.listen(port, () => {
    console.log("listen port 8080")
});