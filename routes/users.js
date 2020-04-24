var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");

/* GET users listing. */
router.use(require("../middlewares/checkOrigin"));
//router.use(require("../middlewares/checkAuthKey"));
router.get("/", function (req, res, next) {
  const key = req.headers["x-access-token"] || req.headers["authorization"];
  if (!key) return res.status(401).send("Access denied. No token provided.");
  if (!checkAuthKey(key)) return res.status(400).send("Invalid token.");

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
