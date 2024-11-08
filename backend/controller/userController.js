const User = require("../model/userModel");

//get all users
const getAll = async (req, res) => {
  try {
    const userdata=await User.find()
    if(!userdata){
      throw new Error("No record find")
    }
    res.status(201).json({
      status:true,
      data:userdata
    })
  } catch (error) {
    res.status(400).json({
      status:false,
      msg:error.message
    })
  }
};


//get user
const getOne = async (req, res) => {
  try {
    const { id } = req.params.id;
    const userdata = await User.findById({ id });
    if (!userdata) throw new Error("user not found");
    res.status(200).json({
      status: true,
      data:userdata,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      msg: err.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name)
    const userdata= await User.create({name,email,password})
    if (!userdata){
      throw new Error("Unable to create user")
    }
    res.status(201).json({
      status: true,
      data: userdata
    })
    }
     catch (error) {
      res.status(400).json({
        status: false,
        msg: error.message,
      })
  };
}
//update users
const updateOne = async (req, res) => {
  const id  = req.params.id;
  try {
    const { name, email, password } = req.body;
    const userdata = await User.findByIdAndUpdate(
      id,
      req.body
    );

    if (!userdata) {
      throw new Error("user not found");
    }
    res.status(200).json({
      status: true,
      data: userdata,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      messsage: err.message,
    });
  }
};
//del user
const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      throw new Error("user not found");
    }
    res.status(200).json({
      success: true,
      data: deleteUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      messsage: err.message,
    });
  }
};
module.exports = {
  getAll,
  getOne,
  updateOne,
  deleteOne,
  createUser
};
