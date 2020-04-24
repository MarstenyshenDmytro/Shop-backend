const authKey = require("../constants");

module.exports = (req, res, next) => {
  if (req.headers["authorization"] === authKey) {
    res.header("Access-Control-Allow-Origin", req.headers.origin); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Authorization, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
};
