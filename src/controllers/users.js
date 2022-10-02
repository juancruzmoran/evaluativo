const db = require('../../database/models')

module.exports = {
    list : (req,res) => {
        db.User.findAll()
        .then((users) => {
            return res.render('index', {users
                 })
        })
        .catch(error => console.log(error))
    },
}