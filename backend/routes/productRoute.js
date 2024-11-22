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
const roleMiddleware = require("../middleware/roleMiddleware");
const productSchema = require("../validator/prdValidator");
const errorHandler = require("../middleware/errorMiddleware");
const updatepProductSchema = require("../validator/updateValidator");

router
  .route("/")
  // .get(errorHandler, validateToken, roleMiddleware, getAllProducts)
  .get(getAllProducts)
  // .post(
  //   errorHandler,
  //   validateToken,
  //   roleMiddleware,
  //   productSchema,
  //   createProduct
  // );
.post(createProduct);

router
  .route("/:id")
  // .get(errorHandler, validateToken, roleMiddleware, getOneProduct)
  .get(getOneProduct)
  // .patch(
  //   errorHandler,
  //   validateToken,
  //   roleMiddleware,
  //   updatepProductSchema,
  //   updateProduct
  // )
  .patch(updateProduct)
  // .delete(errorHandler, validateToken, roleMiddleware, deleteProduct);
.delete(deleteProduct);

module.exports = router;
