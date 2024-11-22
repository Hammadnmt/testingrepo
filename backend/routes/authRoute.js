const express = require("express");
const router = express.Router();

const { login, signup, logout } = require("../controller/authController");
const userSchema = require("../validator/usrValidator");
const errorHandler = require("../middleware/errorMiddleware");
const validateJsonBody = require("../middleware/validJson");


router.route("/login").post(errorHandler,validateJsonBody, login);
router.route("/signup").post(errorHandler, validateJsonBody,userSchema, signup);
router.route("/logout").get(errorHandler, logout);

module.exports = router;
