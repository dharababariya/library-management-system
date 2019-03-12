//knex config

const knex = require('../../../helpers/knex');

app.use(function (req,res, next){
    if("OPTIONS" === req.method){
        res.sendStatus(200)
    }else{
        next();
    }
})
app.get('/', (req, res) => {

        res.render('signup');
    });

    app.use(function(req,res,next){
        if("OPTIONS" === req.method){
            res.sendStatus(200)

        }else{
            next();
        }

    })
    app.post('/signup', async function(req,res){
        console.log(JSON.stringify(req.body));
        const result = await knex("library.registration").insert({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone,
            address:req.body.address
        })
        console.log('result');
    })
