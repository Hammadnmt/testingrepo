const errorHandler =(err, req, res, next)=>  {
  console.log(err.statusCode);
  res.status(500).json({
    status: false,
    code: err.statusCode || 500,
    message: err.message || "Server Error",
  });
};
module.exports=errorHandler
