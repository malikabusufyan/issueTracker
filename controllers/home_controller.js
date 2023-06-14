module.exports.home = (req, res) => {
  try {
    return res.end("<h1>Home Controller is Up!!!!</h1>");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
