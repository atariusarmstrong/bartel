const Bar = require('../models/Bar')
const User = require('../models/User')


const appController = {
    signup: (req, res) => {
        res.render("login-signup/portal")
    },
    create: (req, res) => {
        console.log('will create new user')
        res.redirect('/index')
    },
    index: (req, res) => {
        res.render('app/index')
    }
}

module.exports = appController