const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const errorController = require("./controllers/error");
const mongoose = require("mongoose");
const User = require("./models/user");

// Init app
const app = express();

// Middlewares
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  try {
    req.user = await User.findById("5cbfc9fd68c62b86e343c3ed");
    next();
  } catch (err) {
    console.error(err);
  }
});

// Routing
app.use("/admin", adminRoutes);
app.use(authRoutes);
app.use(shopRoutes);
app.use("/", errorController.get404);

// DB and Server
mongoose
  .connect(
    "mongodb+srv://gabriellvasile:KYjM5jBPTeCPcJlA@mongotut-sxsgb.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(async () => {
    try {
      const user = await User.findOne();
      if (!user) {
        const user = new User({
          name: "Gabriel",
          password: "test",
          email: "test@test.com"
        });
        user.save();
      }
    } catch (err) {
      console.error(err);
    }
    app.listen(3000);
  })
  .catch(console.error);
