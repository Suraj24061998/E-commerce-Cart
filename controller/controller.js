const nodemailer = require("nodemailer");
const express = require('express');
const router = express.Router();
const create= async (req, res) => {
   try {
     const { email } = req.body;
     const existingUser = await User.findOne({ email });
     function generateOtp() {
       const otp = Math.floor(100000 + Math.random() * 900000);
       return otp.toString();
     }
     const resetToken = generateOtp();
     console.log(resetToken, "resetToken");
     existingUser.resetToken = resetToken;
     await existingUser.save();
     const mailOptions = {
       from: "surajalpha2z@gmail.com",
       to: email,
       subject: "Password Reset",
       text: `conform with your otp: ${resetToken}`,
     };
     const transporter = nodemailer.createTransport({
       service: "gmail",
       auth: {
         user: "surajalpha2z@gmail.com",
         pass: "gwlr hqik kuyq xweu ",
       },
     });
     await transporter.sendMail(mailOptions);
     res.json({ message: "Reset instructions sent to your email" });
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
}


  module.exports = {create};
  console.log("controllerok");