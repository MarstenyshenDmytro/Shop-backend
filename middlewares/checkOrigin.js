const authKey = require("../constants");

module.exports = (req, res, next) => {
  console.log(req.headers["authorization"]);
  if (req.headers["authorization"] === authKey) {
    console.log(1);
    res.header("Access-Control-Allow-Origin", req.headers.origin); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Authorization, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
};
