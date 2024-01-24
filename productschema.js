const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    name:String,
    model:String,
    price:String,
   
    

})
module.exports=mongoose.model("product",userschema)