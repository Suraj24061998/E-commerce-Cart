const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    firstname: String,
    combanyname: String,
    streetaddress: String,
    appartment: String,
    towncity: String,
    phonenumber: String,
    email: String
})

module.exports = mongoose.model("billaccount", userschema)