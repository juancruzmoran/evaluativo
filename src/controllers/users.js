const db = require('../database/models');

module.exports = {
    list : (req,res) => {
        db.User.findAll()
        .then((users) => {
            return res.render('index', {users
                 }) 
        })
        db.Category.findAll()
        .then((category) =>{
            return category
        })
        .catch(error => console.log(error))
    },
}