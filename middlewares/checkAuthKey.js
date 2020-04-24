const authKey = require("../constants");

const checkAuthKey = (key) => {
  return key === authKey;
};

module.exports = checkAuthKey;
