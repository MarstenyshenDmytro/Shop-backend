var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  response.json({
    name: "Ivan",
    password: "123",
  });
});

module.exports = router;
