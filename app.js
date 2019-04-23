const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const mongoose = require("mongoose");

// Init app
const app = express();

// Middlewares
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use("/", errorController.get404);

// DB and Server
mongoose
  .connect(
    "mongodb+srv://gabriellvasile:KYjM5jBPTeCPcJlA@mongotut-sxsgb.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(console.error);
