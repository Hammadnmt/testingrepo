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

router
  .route("/")
  .get(validateToken, checkRole, getAllProducts)
  .post(validateToken, checkRole, createProduct);
router
  .route("/:id")
  .get(validateToken, checkRole, getOneProduct)
  .patch(validateToken, checkRole, updateProduct)
  .delete(validateToken, checkRole, deleteProduct);

module.exports = router;
