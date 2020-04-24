const authKey = require("../constants");

const checkAuthKey = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization === authKey) {
    next();
  } else {
    res.status(401).send("Bad authorization key.");
  }
};

module.exports = checkAuthKey;
