const Comment = require('../models/Comment')
const Bar = require('../models/Bar')
const User = require('../models/User')

const commentController = {
    index: (req, res) => {
        res.render("comments/index")
    }
}

module.exports = commentController