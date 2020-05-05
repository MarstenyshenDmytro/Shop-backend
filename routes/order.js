var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");

/* GET users listing. */
//router.use(require("../middlewares/checkAuthKey"));
//router.use(require("../middlewares/checkOrigin"));
function getProductId(arr) {
  let str = "";
  arr.forEach((element) => {
    str += `${element.id},`;
  });
  return str.slice(0, -1);
}

router.post("/", function (req, res, next) {
  const { body } = req;
  const { userData, orderedProducts } = body;
  const { firstName, email, phone } = userData;
  const productsId = getProductId(orderedProducts);
  const productsInfo = [];

  const client = pgClient();
  client.connect();
  client.query(
    `SELECT id,name FROM products WHERE id IN(${productsId})`,
    (err, dbRes) => {
      if (err) console.log(err);
      console.log("DBRESPONS", dbRes.rows);
      //   orderedProducts.forEach((element,i) => {
      //     productsInfo.push({name:  dbRes.rows[i].name, size= orderedProducts. })
      //   });

      client.end();
    }
  );

  const send = require("gmail-send")({
    user: "martsenyshen@gmail.com",
    pass: "ForApi05052020",
    to: "user@gmail.com",
    subject: "test subject",
  });
  res.json({
    data: "oder",
  });
});

module.exports = router;
