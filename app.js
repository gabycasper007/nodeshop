const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const mongoose = require("mongoose");

const app = express();

// Middlewares
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use("/admin", admin.router);
app.use(shopRoutes);
app.use("/", errorController.get404);

mongoose
  .connect(
    "mongodb+srv://gabriellvasile:KYjM5jBPTeCPcJlA@mongotut-sxsgb.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(console.error);
