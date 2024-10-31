const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleID: String,
    displayName: String,
    email: String,
    image: String
}, { timestamps: true })


//create new user in the database
const userdb = new mongoose.model('users', userSchema)


module.exports = userdb