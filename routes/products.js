var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");

function filterQueryString(str) {
  if (str === undefined) return "";
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
  const { query } = req;
  const { filters, offset, limit } = query;
  const clientProducts = pgClient();
  const clientCount = pgClient();
  const f = filterQueryString(filters);
  const o = parseInt(offset) || 0;
  const l = parseInt(limit) || 6;

  clientProducts.connect();
  clientCount.connect();
  clientProducts.query(
    `SELECT * FROM products ${f} ORDER BY id DESC LIMIT ${l} OFFSET ${o}`,
    (err, dbRes) => {
      if (err) console.log(err);
      clientCount.query(
        `SELECT COUNT(*) AS count FROM products ${f}`,
        (err, dbResCount) => {
          if (err) console.log(err);
          res.json({
            data: dbRes.rows,
            count: dbResCount.rows,
          });
          clientCount.end();
        }
      );
      clientProducts.end();
    }
  );
});

router.get("/:productId", function (req, res, next) {
  const { url } = req;
  const id = url.slice(1, url.length);

  const client = pgClient();
  client.connect();
  client.query(`SELECT * FROM products WHERE id=${id}`, (err, dbRes) => {
    if (err) console.log(err);

    res.json({
      data: dbRes.rows,
    });

    client.end();
  });
});

module.exports = router;
