const User = require("../model/userModel");
const genToken = require("../utils/genToken");
const comparePasswords = require("../utils/hashtoPlain");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Check if User Exist
    const userdata = await User.findOne({ email: email });
    if (userdata && (await comparePasswords(password, userdata.password))) {
      const accessToken = genToken(userdata);
      res.cookie("authToken", accessToken, { httpOnly: true });
      res.status(200).json({
        status: true,
        email: userdata.email,
        role: userdata.role,
        accessToken,
      });
    } else {
      throw new Error("Enter Valid Email and Password");
    }
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      throw new Error("User already exists");
    }
    //create new user
    const userdata = await User.create({
      name,
      email,
      password,
      role,
    });
    if (!userdata) {
      throw new Error("Unable to create user");
    }
    res.status(201).json({
      status: true,
      message: "User created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  // Clear the 'authToken' cookie
  res
    .status(200)
    .clearCookie("authToken")
    .json({ message: "Logged out successfully" });
  // Send a response to confirm logout
};

module.exports = {
  login,
  signup,
  logout,
};
