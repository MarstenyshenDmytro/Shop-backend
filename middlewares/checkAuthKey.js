const authKey = require("../constants");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  consoloe.log(authorization);
  if (authorization === authKey) {
    console.log(1);
    next();
  } else {
    res.status(401).send("Bad authorization key.");
  }
};
