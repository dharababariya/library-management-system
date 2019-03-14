//knex config

const knex = require('../helpers/knex');

//add module

module.exports = function (app) {

    app.get('/login', (req, res) => {

        res.render('login');
    });
    //create login api
    app.use(function (req, res, next) {
        if ("OPTION" === req.method) {

            res.sendStatus(200)
        } else {
            next();
        }
    });

    app.post('/signin', async function (req, res) {

        //console.log(JSON.stringify(req.body))
        try {

            //insert value in body
            const result = await knex("library.signin").insert({email: req.body.email, password: req.body.password})
            console.log(`resule ${JSON.stringify(result)} `)
        } catch (error) {
            console.log(error);

        }

    })

}
