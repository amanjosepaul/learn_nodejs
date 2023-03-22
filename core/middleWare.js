module.exports = reqFilter = (req, resp, next) => {
  console.log("req.query.age: ", req.query.age);
  !req.query.age
    ? resp.send("Please enter age.")
    : req.query.age > 18
    ? next()
    : resp.send("Below 18 years age is not authorised");
};
