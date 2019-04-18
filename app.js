const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/add-product", (req, res) => {
  res.send(
    '<form action="product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form>'
  );
});

app.post("/product", (req, res) => {
  console.log(req.body.title);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.listen(3000);
