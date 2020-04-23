var express = require("express");
var router = express.Router();

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
  const getAllProducts = require("../queries/allProducts");
  console.log("USERS FILE", getAllProducts());
  res.json({
    data: getAllProducts(),
  });
  // const { Client } = require("pg");

  // const client = new Client({
  //   connectionString: process.env.DATABASE_URL,
  //   ssl: false,
  // });

  // client.connect();
  // client.query("SELECT * FROM products WHERE id=1", (err, dbRes) => {
  //   if (err) console.log(err);

  //   console.log(dbRes);

  //   res.json({
  //     data: dbRes.rows,
  //   });

  //   client.end();
  // });
});

module.exports = router;
