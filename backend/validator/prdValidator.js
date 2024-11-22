const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const productSchema = [
  body("name")
    .exists()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be string"),

  body("quantity")
    .exists()
    .withMessage("quantity is required")
    .isInt()
    .withMessage("quantity must be numeric"),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }),
];

module.exports = productSchema;
