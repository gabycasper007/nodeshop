exports.getLogin = (req, res) => {
  console.log(req.isAuth);

  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login"
  });
};

exports.postLogin = (req, res) => {
  res.redirect("/");
};
