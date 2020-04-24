const authKey = require("../constants");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === authKey) {
    next();
  } else {
    res.status(401).send("Bad authorization key.");
  }
};
