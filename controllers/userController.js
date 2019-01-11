const User = require('../models/User')
const Bar = require('../models/Bar')

const userController = {
    index: (req, res) => {
        User.find({}).then((userpost) => {
            res.render('user/index', {userpost})
        })

        
    },
    show: (req, res) => {
        const userId = req.params.userId
        User.findById(userId).then((user) => {
            res.render('user/show', {user})
        })
    },
    delete: (req, res) => {
        const userId = req.params.userId
        User.findByIdAndRemove(userId).then(()=> {
            res.redirect('/user')
        })
    }
}

module.exports = userController