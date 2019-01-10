const User = require('../models/User')
const Bar = require('../models/Bar')

const userController = {
    index: (req, res) => {
        const userId = req.params.userId
        res.render('user/index')
    },
    show: (req, res) => {
        const userId = req.params.userId
        console.log(userId)
        User.findById(userId).then((user) => {
            console.log(user, 'hello')
            res.render('user/show', {user})
        })
        
    }
}

module.exports = userController