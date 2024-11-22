const Product = require("../model/productModel");

//get all users
const getAllProducts = async (req, res) => {
  try {
    const productdata = await Product.find();
    if (productdata.length == 0) {
      throw new Error("No Products Found");
    } else {
      res.status(201).json({
        status: true,
        data: productdata,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

//get user
const getOneProduct = async (req, res) => {
  try {
    const productdata = await Product.findById(req.params.id);
    if (productdata == null) {
      throw new Error("No Product Found");
    } else {
      res.status(200).json({
        status: true,
        data: productdata,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

// create product
const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const productdata = await Product.create({ name, quantity });
    if (productdata == null) {
      throw new Error("Unable to create product");
    } else {
      res.status(201).json({
        status: true,
        message: "Product created Successfully",
        data: productdata,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

//update users
const updateProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const id = req.params.id;
    const productdata = await Product.findByIdAndUpdate(
      id,
      { name, quantity },
      {
        new: true,
      }
    );
    if (productdata == null) {
      throw new Error("No Product Found");
    } else {
      res.status(200).json({
        status: true,
        message: "Product Updated Successfully",
        data: productdata,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

//delete user
const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (deleteProduct == null) {
      throw new Error("No Product Found");
    } else {
      res.status(200).json({
        status: true,
        message: "Product deleted Successfully",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

// exports
module.exports = {
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  createProduct,
};
