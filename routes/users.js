var express = require("express");
var router = express.Router();

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false,
});
console.log(process.env.DATABASE_URL);
client.connect();

client.query("SELECT 1", (err, res) => {
  if (err) console.log(err);

  console.log(res);

  client.end();
});
/* GET users listing. */
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
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
