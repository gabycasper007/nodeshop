const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// Middlewares
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use("/admin", admin.router);
app.use(shopRoutes);
app.use("/", (req, res) => {
  res.status(404).render("404", { pageTitle: "404 - Page not found" });
});

app.listen(3000);
