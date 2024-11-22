const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    status: false,
    code: err.statusCode || 500,
    message: err.message || "Server Error",
  });
  next(err);
};

module.exports = errorHandler;
