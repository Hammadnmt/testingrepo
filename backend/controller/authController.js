const User = require('../model/userModel')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')



const login = async (req, res) => {
    const { email, password } = req.body;
    if (!user || !password) {
        throw new Error("Enter Email and password")
    }
    const userdata = await User.findOne({ email: email })
    if (userdata && bycrpt.compare(password, userdata.password)) {
        const accessToken = jwt.sign({
            user: {
                username: userInfo.username,
                email: userInfo.email,
                id: userInfo.id
            },
        }, process.env.ACCESS_SECRET_TOKEN, { expiresIn: "15m" });
        res.status(201).json({ accessToken });
    } else {
        res.status(400)
        throw new Error("Email or Password not correct")
    }
}

module.exports={
    login,
}