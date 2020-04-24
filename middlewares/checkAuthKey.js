const authKey = require("../constants");

module.exports = (req, res, next) => {
  consoloe.log(req.headers.authorization);
  if (req.headers.authorization === authKey) {
    console.log(1);
    next();
  } else {
    res.status(401).send("Bad authorization key.");
  }
};
