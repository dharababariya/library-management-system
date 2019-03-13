//knex config
// const express = require('express');
// const app = express();
const knex = require('../../../helpers/knex');

module.exports = function (app) {

    app.get('/', (req, res) => {

        res.render('signup');
    })

    app.use(function (req, res, next) {
        if ("OPTIONS" === req.method) {
            res.sendStatus(200)

        } else {
            next();
        }

    })

    app.post('/signup', async function (req, res) {
        console.log(JSON.stringify(req.body));
        try {


            const result = await knex("library.registration").insert({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                address: req.body.address
            }).returning('*');

            console.log(`result ${JSON.stringify(result)}`);
            res.sendStatus(200).send(result);


        } catch (error) {

            console.error(error);
        }

        
    })

}