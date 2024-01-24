const fs = require('fs')
const path = require('path')

const multer = require('multer')

// var images=Date.now()+'.png';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage }).single('image');


route.post("/addproduct", upload, (req, res) => {
    let stud = new st({
        name: req.body.name,
        img: req.file
    })


    stud.save()

        .then(response => {
            res.json({
                status: 200,
                msg: "added new user",
                user: response,

            })
        }).catch(err => {
            res.json({
                status: 500,
                msg: "error",
                err: err
            })
        })
})    