const User = require("../model/userModel");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const hashing = require("../utils/hashing");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Enter Email and password");
    }
    const userdata = await User.findOne({ email: email });
    if (userdata && (await bycrpt.compare(password, userdata.password))) {
      console.log("password match")
      const accessToken = jwt.sign(
        {
          user: {
            id: userdata.id,
          },
        },
        process.env.ACCESS_SECRET_TOKEN,
        { expiresIn: "15m" }
      );
      res.status(201).json({ accessToken });
    } else {
      res.status(400);
      throw new Error("Email or Password not correct");
    }
  } catch (error) {
    console.log(error);
  }
};
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    // if (!name || !email || !password) {
    //   throw new Error("Enter Email and password");
    // }
    console.log("dgsgdhs");
    const encyptPassword = await hashing(password);
    console.log(encyptPassword);
    const userdata = await User.create({
      name,
      email,
      password: encyptPassword,
    });
    if (userdata) {
      res.status(201).json({
        username: userdata.name,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  signup,
};
