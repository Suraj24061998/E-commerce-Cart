const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require('cors')
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
let db = require('./dbconnection')
const router = require('./router')
app.use(express.static(`${__dirname}/uplods`));



app.use('/', router)
app.listen(8080)
console.log(" index ok");