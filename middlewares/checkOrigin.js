module.exports = async (req, res, next) => {
  console.log(req.headers.origin);
  await res.header("Access-Control-Allow-Origin", req.headers.origin); // update to match the domain you will make the request from
  await res.header(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept"
  );
  const key = req.headers["x-access-token"] || req.headers["authorization"];
  if (key === authKey) {
    console.log(1);
    next();
  } else {
    res.status(401).send("Bad authorization key.");
  }
};
