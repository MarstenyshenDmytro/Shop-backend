var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");

/* GET users listing. */
router.use(function (req, res, next) {
  console.log("URL", req.url);
  if (req.get) console.log(req.get("url"));
  if (req.header) console.log(req.header);
  if (req.header) console.log(req.header("url"));
  if (req.host) console.log(req.host);
  if (req.originalUrl) console.log(req.originalUrl);
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
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
