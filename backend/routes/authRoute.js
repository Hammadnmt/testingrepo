const express = require("express");
const router = express.Router();

const { login, signup } = require("../controller/authController");
const userSchema = require("../middleware/usrValidator");

router.route("/login").post(login);
router.route("/signup").post(userSchema, signup);

module.exports = router;
