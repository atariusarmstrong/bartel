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
    edit: (req, res) => {
        const userId = req.params.userId
        User.findById(userId).then(()=> {
            res.render('user/edit', { userId })
        })
    },
    update: (req, res) => {
        const userId = req.params.userId
        User.findByIdAndUpdate(userId, req.body, {new: true}).then((userpost) => {
            res.redirect(`/user/${userId}`)
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