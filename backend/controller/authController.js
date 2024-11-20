const User = require("../model/userModel");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userdata = await User.findOne({ email: email });
      if (userdata && (await bycrpt.compare(password, userdata.password))) {
        console.log("password match");
        const accessToken = jwt.sign(
          {
            user: {
              id: userdata.id,
              email:userdata.email,
              role:userdata.role,
            },
          },
          process.env.ACCESS_SECRET_TOKEN,
          { expiresIn: "15m" }
        );
        res.setHeader("X-Set-Cookie", `accessToken=${accessToken}`, "SameSite=Strict");
        res.status(201).json({
          accessToken,
          email:userdata.email,
          role:userdata.role,
        });
      }else{
      throw new Error("Enter Valid Email and Password")
    }
  }
    catch (error) {
    res.status(404).json({
      status:false,
      message:error.message
    })
  }
};
const signup = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;
    const userdata = await User.create({
      name,
      email,
      password,
      role,
    });

    if (userdata) {
      res.status(201).json({
        message:"Successfully Signed up",
        username: userdata.name,
      });
    }
  } catch (error) {
    res.status(400).json({
      message:error.message
    })
  }
};

module.exports = {
  login,
  signup,
};
