const user = require('./billingschema')
const bill = (req, res) => {
    let data = user({
        firstname: req.body.firstname,
        combanyname: req.body.combanyname,
        streetaddress: req.body.streetaddress,
        appartment: req.body.appartment,
        towncity: req.body.towncity,
        phonenumber: req.body.phonenumber,
        email: req.body.email
    })
    data.save().then(data => {
        res.json({
            status: 200,
            msg: "billaccount created",
            data: data
        })
            .catch(err => {
                res.json({
                    status: 500,
                    msg: "billaccount not created"
                })
            })
    })

}
const viewbill = (req, res) => {
    user
        .find()
        .exec()
        .then((data) => {
            //   console.log(data);
            res.json({
                status: 200,
                msg: "view account",
                data: data,
            });
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "faild",
            });
        });
}
module.exports = { bill, viewbill }