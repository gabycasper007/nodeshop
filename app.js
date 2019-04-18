const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

app.set("view engine", "pug");
app.use(express.static("public"));
// app.use((req, res, next) => {
//   res.view = fileName => path.resolve("views", fileName);
//   next();
// });
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use("/", (req, res) => {
  res.status(404).render("404");
});

app.listen(3000);
