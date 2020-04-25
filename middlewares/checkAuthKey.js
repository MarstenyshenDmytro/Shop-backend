const authKey = require("../constants");
let jwt = require("jsonwebtoken");
const config = require("../config");

//let checkToken =

module.exports = (req, res, next) => {
  res.statusCode = 401;
  res.setHeader("WWW-Authenticate", "Basic");
  res.end("Unauthorized");
};
