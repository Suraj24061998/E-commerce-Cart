const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
   name: String,
   email: String,
   createpassword: String,
   number:String,
   resetToken: String,

})
module.exports = mongoose.model("newaccount", userschema)