const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const decode = jwt.verify(token, JWT_SECRET);
  if (decode.username) {
    req.username = username;
    next();
  } else {
    res.status("403").json({
      message: "Plese login",
    });
  }
}

module.exports = userMiddleware;
