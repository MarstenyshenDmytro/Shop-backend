const authKey = require("../constants");

module.exports = (req, res, next) => {
  const key = req.headers["x-access-token"] || req.headers["authorization"];
  if (key === authKey) {
    console.log(1);
    next();
  } else {
    res.status(401).send("Bad authorization key.");
  }
};
