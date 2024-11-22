const validateJsonBody = (err, req, res, next) => {
  console.log(req.body);
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON payload" });
  }
  next();
};
module.exports = validateJsonBody;
