module.exports = async (req, res, next) => {
  console.log(req.headers.origin);
  await res.header("Access-Control-Allow-Origin", req.headers.origin); // update to match the domain you will make the request from
  await res.header(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept"
  );
  next();
};
