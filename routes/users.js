var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");

/* GET users listing. */
router.use(require("../middlewares/checkAuthKey"));
router.use(require("../middlewares/checkOrigin"));
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
