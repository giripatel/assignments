// Middleware for handling auth
const JWT_SECRET = require('../config')
const jwt = require('jsonwebtoken')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin   DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    const decode = jwt.verify(token,JWT_SECRET);
    if(decode.username){
        next();
    }else{
        res.status('403').json({
            message : "Plese login"
        })
    }

}

module.exports = adminMiddleware;