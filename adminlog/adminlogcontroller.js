const user = require('./adminlogschema')
const adminlog = (req, res) => {
    let data = user({

        email: req.body.email,
        password: req.body.password
    })
    data.save().then(data => {

        res.json({
            status: 200,
            msg: "account created",
            data: data
        })
        console.log("Data saved")
    }).catch(err => {

        res.json({
            status: 500,
            msg: "account not created"
        })

    })
}

const adlog = (req, res) => {
    user.findOne({ email: req.body.email })
        .exec()
        .then((data) => {
            // console.log(data);
            if (data.password == req.body.password) {
                res.json({
                    status: 200,
                    msg: "login sucessfully",
                    data: data,
                });
            } else {
                res.json({
                    status: 500,
                    msg: "password mismatch",
                });
            }
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "login faild",
            });
        });
}



module.exports = { adminlog, adlog }