const user = require('./customerschema')
const bcrypt = require('bcrypt');



const addData = async (req, res) => {
    try {
        const { name, email, createpassword, number } = req.body;
        const hashedPassword = await bcrypt.hash(createpassword, 10);
        const data = new user({
            name: name,
            email: email,
            createpassword: hashedPassword, 
            number: number,
        });
        await data.save();
        res.json({
            status: 200,
            msg: 'Account created',
            data: data,
        });
        console.log('Data saved');
    }  catch (err) {
        console.error('Error creating account:', err);
        res.json({
            status: 500,
            msg: 'Account not created',
        });
    }
};

const login = async (req, res) => {
    try {
        const enteredPassword = req.body.createpassword;
        const data = await user.findOne({ $or: [{ email: req.body.email }, { name: req.body.name }] }).exec(); 
        if (data) {
            const passwordMatch = await bcrypt.compare(enteredPassword, data.createpassword);
            console.log('Password Match:', passwordMatch);
            if (passwordMatch) {
                res.json({
                    status: 200,
                    msg: "Login successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 500,
                    msg: "Password mismatch"
              });
            }
        } else {
            res.json({
                status: 500,
                msg: "User not found"
            });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.json({
            status: 500,
            msg: "Login failed"
        });
    }
};





module.exports = { addData, login }
