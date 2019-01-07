const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comment = new Schema({
    user: {
        type: Schema.Types.String,
        ref: "User"
    },
    text: String
})

module.exports = mongoose.model("Comment", Comment)