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
  .post(validateToken, checkRole, productSchema, createProduct);
router
  .route("/:id")
  .get(validateToken, checkRole, getOneProduct)
  .patch(validateToken, checkRole, productSchema, updateProduct)
  .delete(validateToken, checkRole, deleteProduct);

module.exports = router;
