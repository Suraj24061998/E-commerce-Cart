const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
   userid:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
   productid:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
   prize:{type:Number},
   

})
module.exports=mongoose.model("cart",userschema)