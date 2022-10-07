const db = require('../../database/models');

module.exports = {
    list : (req,res) => {
        db.User.findAll()
        .then((users) => {
            return res.render('users', {users
                 }) 
        })
        .catch(error => console.log(error))
    },
}