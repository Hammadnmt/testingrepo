const User = require("../model/userModel");
const genToken = require("../utils/genToken");
const comparePasswords = require("../utils/hashtoPlain");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if User Exist
    const userdata = await User.findOne({ email: email });
    if (userdata && comparePasswords(password, userdata.password)) {
      const accessToken = genToken(userdata);
      res.cookie("authToken", accessToken, { httpOnly: true });
      res.status(200).json({
        accessToken,
        email: userdata.email,
        role: userdata.role,
      });
    } else {
      throw new Error("Enter Valid Email and Password");
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    //create new user
    const userdata = await User.create({
      name,
      email,
      password,
      role,
    });
    //generates new token
    const accessToken = genToken(userdata);
    if (userdata && accessToken) {
      res.cookie("authToken", accessToken, { httpOnly: true });
      res.status(201).json({
        message: "Successfully Signed up",
        username: userdata.name,
        accessToken: accessToken,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const logout = (req, res) => {
  // Clear the 'authToken' cookie
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  // Send a response to confirm logout
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
  login,
  signup,
  logout,
};
