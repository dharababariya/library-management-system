//Import modules

const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const port = 8080;
const schema = require('async-validator');
const bodyParser = require('body-parser');

 
 // Express Initialize
const app = express();

//env config
dotenv.config();

//decode usrl in simplest form
app.use(bodyParser.urlencoded({extended: false}));

//common routes
const signup = require('./routes/v1/registration/sign_up');

//fire
signup(app);

//midleware
app.use('/css', express.static(__dirname + '/css'));

//set view engine
app.set('view engine', 'ejs');


//port listen
app.listen(port, () => {
    console.log("listen port 8080")
});