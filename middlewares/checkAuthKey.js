const authKey = require("../constants");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const key = req.headers["x-access-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)
  if (!key) return res.status(401).header("Status Code", 401);

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(key, authKey);

    console.log(decoded);
    //req.user = decoded;
    next();
  } catch (ex) {
    //if invalid token
    res.status(400).header("Status Code", 400);
  }
};
