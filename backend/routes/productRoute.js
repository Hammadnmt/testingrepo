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
const productSchema = require("../middleware/prdValidator");

router
  .route("/")
  // .get(validateToken, checkRole, getAllProducts)
  .get(getAllProducts)
  // .post(validateToken, checkRole, productSchema, createProduct);
  .post(createProduct);

router
  .route("/:id")
  // .get(validateToken, checkRole, getOneProduct)
  .get(getOneProduct)

  // .patch(validateToken, checkRole, productSchema, updateProduct)
  .patch(updateProduct)

  // .delete(validateToken, checkRole, deleteProduct);
  .delete(deleteProduct);

module.exports = router;
