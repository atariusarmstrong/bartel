const Comment = require('../models/Comment')
const Bar = require('../models/Bar')
const User = require('../models/User')

const commentController = {
    index: (req, res) => {
        const barId = req.params.barId
        Bar.findById(barId).populate('comments').then((bar) => {
            const comments = bar.comments
            res.render('comments/index', { comments, barId })

        })
    },
    create: (req, res) => {
        const barId = req.params.barId
        Bar.findById(barId).then((barpost) => {
            Comment.create(req.body).then((comment) =>{
                barpost.comments.push(comment)
                barpost.save()
                res.redirect(`/${barpost._id}/comments`)
            })
        })
    },
    delete: (req, res) => {
        const commentId = req.params.id
        const barId = req.params.barId
        Comment.findByIdAndDelete(commentId).then(()=> {
            res.redirect(`/${barId}/comments`)
        })
    }
}

module.exports = commentController