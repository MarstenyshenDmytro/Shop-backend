const authKey = require("../constants");

const checkAuthKey = (key) => {
  return key === authKey;
};

module.exports = (req, res, next) => {
  if (req.headers["authorization"] === authKey) {
    next();
  } else {
    res.status(400).send("Bad key");
  }
};
