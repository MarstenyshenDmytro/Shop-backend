var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");

function filterQueryString(str) {
  let obj = {};
  let filterString = "";
  let arr = str.slice(1, -1).split(",");

  arr.forEach((item) => {
    let key = "";
    let value = "";
    key = item.split(":")[0].slice(1, -1);
    value = item.split(":")[1].slice(1, -1);
    obj[key] = value;
  });

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== "none") {
      filterString += `${key}='${value}' and `;
    }
  });
  if (filterString.length !== 0) {
    return `WHERE ${filterString.slice(0, -5)}`;
  }
  return filterString;
}

router.get("/", function (req, res, next) {
  const client = pgClient();
  const filter = filterQueryString(req.query.filters);

  client.connect();
  client.query(
    `SELECT * FROM products ${filter} ORDER BY id DESC`,
    (err, dbRes) => {
      if (err) console.log(err);
      client.query(
        `SELECT COUNT(*) AS count FROM products`,
        (err, dbResCount) => {
          if (err) console.log(err);
          res.json({
            data: dbRes.rows,
            count: dbResCount.count,
          });
        }
      );
      client.end();
    }
  );
});

router.get("/:productId", function (req, res, next) {
  const client = pgClient();
  client.connect();
  client.query("SELECT name FROM products WHERE id=1", (err, dbRes) => {
    if (err) console.log(err);

    res.json({
      data: dbRes.rows,
    });

    client.end();
  });
});

module.exports = router;
