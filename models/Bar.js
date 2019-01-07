const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Bar = new Schema({
    barName: String,
    location: String,
    image: String,
    description: String,
    comments: []
})

module.exports = mongoose.model("Bar", Bar)