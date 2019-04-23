const express = require("express");
const router = express.Router();
const admin = require("./admin");

router.get("/", (req, res) => {
  res.render("shop", {
    products: admin.products,
    pageTitle: "PUG Shop",
    path: "/"
  });
});

module.exports = router;
