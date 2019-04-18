const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRoutes);
app.use("/", (req, res) => {
  res.status(404).send("<h1>These are not the druids you're looking for</h1>");
});

app.listen(3000);
