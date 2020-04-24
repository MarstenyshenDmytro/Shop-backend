var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");
const checkOrigin = require("../middlewares/checkOrigin");
const checkAuthKey = require("../middlewares/checkAuthKey");

/* GET users listing. */
router.use(checkOrigin);
router.use(checkAuthKey);
router.get("/", function (req, res, next) {
  const client = pgClient();

  client.connect();
  client.query("SELECT * FROM products WHERE id=1", (err, dbRes) => {
    if (err) console.log(err);

    res.json({
      data: dbRes.rows,
    });

    client.end();
  });
});

module.exports = router;
