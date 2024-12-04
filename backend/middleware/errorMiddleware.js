const errorHandler = (err, req, res, next) => {
  console.log();
  res.status(err.statusCode).json({
    status: false,
    code: err.statusCode,
    message: err.message || "Server Error",
  });
};
module.exports = errorHandler;
