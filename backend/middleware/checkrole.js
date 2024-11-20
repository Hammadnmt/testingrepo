const asynchandler = require("express-async-handler");

const checkRole = asynchandler(async (req, res, next) => {
  try {
    let role = req.user.role;
    if (role != "Admin") {
      throw new Error("Permission Denied");
    } else {
        res.status(200).json({
            status:true,
            message:"permitted"
        })
        next();
    }
  } catch (error) {
    res.status(400).json({
        status:false,
        message:error.message
    })
  }
});
module.exports= checkRole