const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const userSchema = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be string"),

  body("email")
    .exists()
    .withMessage("Email is required")
    .isString()
    .withMessage("Email must be string")
    .normalizeEmail()
    .isEmail(),

  body("password")
    .exists()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Paswword must contain at least 6 characters"),

  body("role")
    .exists()
    .withMessage("role is required")
    .isString()
    .withMessage("Role must be String")
    .isIn(["Admin", "User"])
    .withMessage("Only Admin and User allowed"),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }),
];

module.exports = userSchema;
