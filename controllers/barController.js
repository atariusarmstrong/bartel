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
    },
    show: (req, res) => {
        const barId = req.params.barId
        const userId = req.params.userId
        Bar.findById(barId).populate('comments author').then((barpost) => {
            // console.log(barpost.author[0].username)
            console.log(barpost);
            
            res.render('app/show', { barpost })
        })
    },
    edit: (req, res) => {
        const barId = req.params.barId
        Bar.findById(barId).then(() => {
            res.render('app/edit', { barId })
        })
    },
    update: (req, res) => {
        const barId = req.params.barId
        Bar.findByIdAndUpdate(barId, req.body, {new: true}).then((barpost)=> {
            res.redirect(`/${barId}`)
        })
    },
    delete: (req, res) => {
        const barId = req.params.barId
        Bar.findByIdAndRemove(barId).then(()=> {
            res.redirect('/index')
        })
    }
}

module.exports = barController