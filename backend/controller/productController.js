const Product = require("../model/productModel");

//get all users
const getAllProducts = async (req, res, next) => {
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
    next(error);
  }
};

//get user
const getOneProduct = async (req, res, next) => {
  try {
    const productdata = await Product.findById(req.params.id);
    if (productdata == null) {
      throw new Error("No Product Found");
    } else {
      res.status(200).json({
        status: true,
        data: [productdata],
      });
    }
  } catch (err) {
    next(err);
  }
};

// create product
const createProduct = async (req, res, next) => {
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
    next(err);
  }
};

//update users
const updateProduct = async (req, res, next) => {
  try {
    // const { name, quantity } = req.body;
    const id = req.params.id;
    // console.log(name, quantity);
    if (req.body.quantity == -1) {
      delete req.body.quantity;
    } else if (req.body.name == "") {
      delete req.body.name;
    }
    const productdata = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (productdata == null) {
      throw new Error("No Product Found");
    } else {
      res.status(200).json({
        status: true,
        message: "Product Updated Successfully",
      });
    }
  } catch (err) {
    next(err);
  }
};

//delete user
const deleteProduct = async (req, res, next) => {
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
    next(err);
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
