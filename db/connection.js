require('dotenv').config()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/bartel").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;