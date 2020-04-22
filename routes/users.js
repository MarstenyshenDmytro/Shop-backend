var express = require("express");
var router = express.Router();
const client = require("../db/db");

/* GET users listing. */
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
router.get("/", async function (req, res, next) {
  await client.connect();
  const dbRes = await client.query("SELECT * FROM products WHERE id=1");
  res.json({
    data: dbRes.rows,
  });
  await client.end();
});

module.exports = router;
