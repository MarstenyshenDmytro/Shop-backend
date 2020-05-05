var express = require("express");
var router = express.Router();
const pgClient = require("../pgClient/client");

/* GET users listing. */
//router.use(require("../middlewares/checkAuthKey"));
//router.use(require("../middlewares/checkOrigin"));

function emailTextOrder(arr) {
  let str = "";
  arr.forEach((element, i) => {
    str += `${i + 1}) product id: ${element.id}, product size ${
      element.value
    }; `;
  });
  return str;
}

router.post("/", function (req, res, next) {
  const { body } = req;
  const { userData, orderedProducts } = body;
  const { firstName, email, phoneNumber } = userData;
  const order = emailTextOrder(orderedProducts);

  const send = require("gmail-send")({
    user: "martsenyshen@gmail.com",
    pass: "ForApi05052020",
    to: email,
    subject: "test subject",
  });

  send(
    {
      text: `Client name: ${firstName}, Clien phone: ${phoneNumber}, Order: ${order}`,
    },
    (error, result, fullResult) => {
      if (error) {
        res.json({
          msg: "Error",
        });
      }
      if (result) {
        res.json({
          msg: "SUCCESS",
        });
        console.log(result);
      }
    }
  );
});

module.exports = router;
