const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Bar = new Schema({
    barName: String,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    location: String,
    image: String,
    description: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model("Bar", Bar)