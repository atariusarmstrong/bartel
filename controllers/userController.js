const User = require('../models/User')

const userController = {
    index: (req, res) => {
        const userId = req.params.userId
        res.render('user/index')
    },
    show: (req, res) => {
        const userId = req.params.userId
        res.render('user/show')
    }
}

module.exports = userController