//knex config

const knex = require('../helpers/knex');

const userModel = require('../models/userModel');

const validationRules = require('../validation_rules/rules');

const asyncValidator = require('async-validator-2');

// add module

module.exports = function (app) {

    //signup page get

    app.get('/reg', (req, res) => {

        res.render('signup');
    })
    //create signun api

    app.use(function (req, res, next) {

        //header

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        if ("OPTIONS" === req.method) {
            res.sendStatus(200)

        } else {
            next();
        }

    })

    app.post('/signup', async function (req, res) {
        console.log(JSON.stringify(req.body));
        try {
            //insert value in boody
            const result = await knex("library.users")
                .insert( {

                    name: req.body.name, 
                    email: req.body.email, 
                    password: req.body.password, 
                    phone: req.body.phone, 
                    address: req.body.address
                })
                .returning('*');

            const rules = validationRules.users.create;
            var validator = new asyncValidator(rules);

            validator.validate((errors , fields)=>{
                if(!error){
                    userModel.createUser( function(result1){

                        if(result1){
                            console.log(result1);
                            res.redirect('/login')
                        }else{
                            res.send('invalid');
                        }
                    })
                
                }else {
                    console.log(fields);
                    res.render('signup', {errs: errors});
                }

            // })



            //respons send
            console.log(`result ${JSON.stringify(result)}`);
            res
                .sendStatus(200)
                .send(result);
            })

        } catch (error) {

            console.error(error);
        }

    })

}