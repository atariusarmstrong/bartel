const Bar = require('../models/Bar')
const User = require('../models/User')


const appController = {
    signup: (req, res) => {
        res.render("login-signup/portal")
    },
    create: (req, res) => {
        console.log(req.body)
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            bio: req.body.bio
        }).then( newUser => {
            res.redirect('/index')
        })
        
    },
    index: (req, res) => {
        Bar.find({}).then(barpost => {
            res.render('app/index', { barpost })
        })
        
    },
    new: (req, res) => {
        res.render("app/create")
    }

}

module.exports = appController