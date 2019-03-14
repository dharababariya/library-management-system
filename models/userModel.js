const db = require('../helpers/knex');

const validateUser = (email,password,callback)=>{
    const sql = "SELECT * FROM users  WHERE  email = ?  AND password = ?";
    db.executeQuery(sql,[email, password], function(result){
        if (callback) {
            callback(result);
        }
    })

}
module.exports = {
 validateUser,

}