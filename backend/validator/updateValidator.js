const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const updateProductSchema = [
  body("name").optional().isString().withMessage("name must be string"),

  body("quantity").optional().isInt().withMessage("quantity must be numeric"),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }),
];

module.exports = updateProductSchema;
