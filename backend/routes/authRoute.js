const express = require("express");
const router = express.Router();

const { login, signup, logout } = require("../controller/authController");
const userSchema = require("../validator/usrValidator");

router.route("/login").post(login);
router.route("/signup").post(userSchema, signup);
router.route("/logout").get(logout);

module.exports = router;
