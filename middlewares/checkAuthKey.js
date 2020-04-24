const authKey = require("../constants");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const key = req.headers["x-access-token"] || req.headers["authorization"];
  if (key === authKey) {
    console.log(1);
    next();
  } else {
    res.send(400, "Bad authorization key.");
  }
  //   const key = req.headers["x-access-token"] || req.headers["authorization"];
  //   //if no token found, return response (without going to the next middelware)
  //   if (!key) return res.send(401, "Access denied. No token provided.");

  //   try {
  //     //if can verify the token, set req.user and pass to next middleware
  //     const decoded = jwt.verify(key, authKey);

  //     console.log(decoded);
  //     //req.user = decoded;
  //     next();
  //   } catch (ex) {
  //     //if invalid token
  //     res.send(400, "Invalid token.");
  //   }
};
