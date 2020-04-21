var express = require("express");
var router = express.Router();

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query(
  "SELECT table_schema, table_name FROM information_schema.tables;",
  (err, res) => {
    if (err) console.log(err);
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  }
);
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
