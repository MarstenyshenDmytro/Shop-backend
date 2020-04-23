const pgClient = require("./client");

const getAllProducts = () => {
  const client = pgClient();

  client.connect();
  client.query("SELECT * FROM products", (err, res) => {
    if (err) console.log(err);

    //console.log(dbRes);

    // res.json({
    //   data: dbRes.rows,
    // });

    client.end();

    return res.rows;
  });
};

module.exports = getAllProducts;
