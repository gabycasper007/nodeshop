const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();

// Middlewares
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use("/admin", admin.router);
app.use(shopRoutes);
app.use("/", errorController.get404);

app.listen(3000);
