const express = require("express");
const router = express.Router();

router
  .get("/add-product", (req, res) => {
    res.render("add-product");
  })
  .post("/add-product", (req, res) => {
    console.log(req.body.title);
    res.redirect("/");
  });

module.exports = router;
