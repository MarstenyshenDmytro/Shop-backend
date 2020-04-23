const pgClient = require("./client");

const getAllProducts = () => {
  const client = pgClient();
  let data;
  client.connect();
  client.query("SELECT * FROM products", (err, res) => {
    if (err) console.log(err);

    //console.log(dbRes);

    // res.json({
    //   data: dbRes.rows,
    // });
    console.log(res.rows);
    data = res.rows;
    client.end();
  });
  return data;
};

module.exports = getAllProducts;
