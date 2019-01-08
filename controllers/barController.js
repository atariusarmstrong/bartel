const Bar = require('../models/Bar')


const barController = {
    create: (req, res) => {
        Bar.create({
            barName: req.body.barName,
            location: req.body.location,
            image: req.body.image,
            description: req.body.description,
            comments: []
        }).then(()=>
        res.redirect('/index'))
    }
}

module.exports = barController