const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controller/productController");

const validateToken = require("../middleware/authMiddleware");
const checkRole = require("../middleware/checkrole");
const productSchema = require("../validator/prdValidator");
const errorHandler = require("../middleware/errorMiddleware");

router
  .route("/")
  // .get(errorHandler, validateToken, checkRole, getAllProducts)
  .get(getAllProducts)
  // .post(errorHandler, validateToken, checkRole, productSchema, createProduct);
  .post(createProduct);

router
  .route("/:id")
  // .get(errorHandler, validateToken, checkRole, getOneProduct)
  .get(getOneProduct)
  // .patch(errorHandler, validateToken, checkRole, updateProduct)
  .patch(updateProduct)
  // .delete(errorHandler, validateToken, checkRole, deleteProduct);
  .delete(deleteProduct);

module.exports = router;
