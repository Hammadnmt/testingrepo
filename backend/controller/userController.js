const User = require("../model/userModel");

//get all users
const getAll = async (req, res) => {
  try {

    //   const users = await User.find();

    //   if (!users) throw new Error("data not found");

    //   res.status(200).json(users);
    // } catch (err) {
    //   res.status(500).json({
    //     success: false,
    //     message: err.message,
    //   });
  } catch (eer) {
    console.log(eer);
  }
};


//get user
const getOne = async (req, res) => {
  try {
    const { id } = req.params.id;
    const user = await User.findById({ id });
    if (!user) throw new Error("user not found");
    res.status(200).json({
      status: false,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
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
  const { id } = req.params;
  try {
    const { name, email, password } = req.body;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      {
        new: true,
      }
    );

    if (!updateUser) {
      throw new Error("user not found");
    }
    res.status(200).json({
      success: true,
      data: updateUser,
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
