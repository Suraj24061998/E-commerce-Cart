const exp=require("express")
const cart=require("./cartmodel")
const addcart=(req,res)=>{
    let cart1=new cart({
        userid:req.body.userid,
        productid:req.body.productid,
        prize:req.body.prize,
        qty:req.body.qty
    })
    cart1.save()
    .then(()=>{
        res.json({
            msg:"saved"
        });
    })
    .catch((err)=>{
        console.log(err);
    
    })
}
module.exports={addcart}