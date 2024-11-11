const Product = require('../model/productModel')

//get all users
const getAll = async (req, res) => {
  try {
    const productdata = await Product.find();
    if (!productdata) {
      throw new Error("Product not found");
    }
    res.status(201).json({
      status: true,
      data: productdata,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: error.message,
    });
  }
};

//get user
const getOne = async (req, res) => {
  try {
    const { id } = req.params.id;
    const productdata = await User.findById({ id });
    if (!productdata) throw new Error("Product not found");
    res.status(200).json({
      status: true,
      data: productdata,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      msg: err.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name,quantity} = req.body;
    console.log(name);
    const productdata = await Product.create({ name, quantity });
    if (!productdata) {
      throw new Error("Unable to create product");
    }
    res.status(201).json({
      status: true,
      data: productdata,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: error.message,
    });
  }
};

//update users
const updateOne = async (req, res) => {
  const id = req.params.id;
  try {
    const productdata = await Product.findByIdAndUpdate(id, req.body);

    if (!productdata) {
      throw new Error("Product not found");
    }
    res.status(200).json({
      status: true,
      data: productdata,
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
    const deleteProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      throw new Error("Product not found");
    }
    res.status(200).json({
      success: true,
      data: deleteProduct,
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
  createProduct,
};
