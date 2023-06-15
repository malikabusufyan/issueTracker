module.exports.home = (req, res) => {
  try {
    return res.render("home", {
      title: "Home",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
