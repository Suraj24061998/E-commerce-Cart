const user = require('./customerschema')
const addData = (req, res) => {
    let data = user({
        name: req.body.name,
        email: req.body.email,
        createpassword: req.body.createpassword,
        number:req.body.number

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

const login = (req, res) => {
    user.findOne({ createpassword: req.body.createpassword }).exec().then(data => {
        // console.log(data);
        if (data) {
            if (data.email == req.body.email || data.name == req.body.name) {

                res.json({
                    status: 200,
                    msg: "login sucessfully",
                    data: data
                })
            }
            else {
                res.json({
                    status: 500,
                    msg: "password mismatch"


                })
            }
        }
        else {
            res.json({
                status: 500,
                msg: "data not exit"
            })
        }
    }).catch(err => {
        res.json({
            status: 500,
            msg: "login faild"
        })
    })
}






module.exports = { addData, login }