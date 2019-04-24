exports.getLogin = (req, res) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login"
  });
};

exports.postLogin = (req, res) => {
  req.session.auth = true;
  res.redirect("/");
};
