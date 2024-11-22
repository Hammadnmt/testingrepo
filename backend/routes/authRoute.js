const express = require("express");
const router = express.Router();

const { login, signup, logout } = require("../controller/authController");
const userSchema = require("../validator/usrValidator");
const errorHandler = require("../middleware/errorMiddleware");

router.route("/login").post(errorHandler, login);
router.route("/signup").post(errorHandler, userSchema, signup);
router.route("/logout").get(errorHandler, logout);

module.exports = router;
