const mongoose = require("mongoose")
const userschema = mongoose.Schema({
   name: String,
   categorey: String,
   description: String,
   price: String,
   image: Object,


})
module.exports = mongoose.model("newproduct", userschema)
