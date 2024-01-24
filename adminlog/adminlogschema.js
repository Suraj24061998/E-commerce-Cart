const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    email: String,
    password: String,
    code:String,

})
module.exports = mongoose.model("adminlogaccount", userschema)