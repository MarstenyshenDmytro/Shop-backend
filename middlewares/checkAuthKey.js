const authKey = require("../constants");

const checkAuthKey = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === authKey) {
    next();
  } else {
    return res.status(401).send("Bad authorization key.");
  }
};

module.exports = checkAuthKey;
