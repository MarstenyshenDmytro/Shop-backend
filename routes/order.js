var express = require("express");
var router = express.Router();

/* GET users listing. */
//router.use(require("../middlewares/checkAuthKey"));
//router.use(require("../middlewares/checkOrigin"));
router.post("/", function (req, res, next) {
  console.log(req.body);
  console.log(req.body.total);
  res.json({
    data: "oder",
  });
});

module.exports = router;
