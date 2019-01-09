const User = require('../models/User')

const userController = {
    index: (req, res) => {
        const userId = req.params.userId
        
        console.log('Should see user profile')
        res.render('user/index')
    }
}

module.exports = userController