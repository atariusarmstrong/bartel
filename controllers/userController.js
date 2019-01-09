const User = require('../models/User')

const userController = {
    index: (req, res) => {
        console.log('Should see user profile')
        res.render('user/index')
    }
}

module.exports = userController