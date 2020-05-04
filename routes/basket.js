var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");

/* GET users listing. */
//router.use(require("../middlewares/checkAuthKey"));
//router.use(require("../middlewares/checkOrigin"));
function filterUqeryString(query) {
  let arr = query.split(",");
  let str = "";
  arr.array.forEach((item) => {
    str += `id=${item} and `;
  });
  return `WHERE ${str.slice(0, -5)}`;
}

router.get("/", function (req, res, next) {
  const { query } = req;
  const { list } = query;
  const filter = filterUqeryString(list);
  const client = pgClient();
  client.connect();
  client.query(`SELECT * FROM products ${filter} `, (err, dbRes) => {
    if (err) console.log(err);

    res.json({
      data: dbRes.rows,
    });

    client.end();
  });
});

module.exports = router;
