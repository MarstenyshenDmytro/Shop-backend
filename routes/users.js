var express = require("express");
var router = express.Router();

/* GET users listing. */
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.baseURL); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
router.get("/", function (req, res, next) {
  res.json({
    name: "Ivan",
    password: "123",
  });
});

module.exports = router;
