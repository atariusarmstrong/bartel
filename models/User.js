const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    email: String,
    password: String,
    img: String,
    bio: String
})

module.exports = mongoose.model("User", user)