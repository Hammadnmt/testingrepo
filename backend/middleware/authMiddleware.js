const jwt = require('jsonwebtoken');
const asynchandler = require('express-async-handler');

const validateToken = asynchandler(async (req, res, next) => {
    try {
    let token;
    let authHeader = req.headers.authorization; // Corrected the header name
    console.log(authHeader)
        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
                if (err) {
                    throw new Error("User is not authorized or Token Expired");
                }
                req.user = decoded.user;
                console.log(req.user);
                
            });
            next();
        }
        else{
            throw new Error("User not authorized or Token Expired")
        }
    } catch (error) {
        res.status(401).json({
            message:error.message
        })
    }
    
});

module.exports = validateToken;
