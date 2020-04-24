var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");
const authKey = require("../constants");

/* GET users listing. */
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept"
  );
  next();
});
router.use(function (req, res, next) {
  const { authorization } = req.headers;
  if (authorization === authKey) {
    next();
  } else {
    res.status(401).send("Bad authorization key.");
  }
});
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
