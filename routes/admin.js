const express = require("express");
const router = express.Router();
const products = [];

router
  .get("/add-product", (req, res) => {
    res.render("add-product", {
      path: "/admin/add-product",
      pageTitle: "Add product"
    });
  })
  .post("/add-product", (req, res) => {
    products.push({
      id: Math.random(),
      title: req.body.title,
      image:
        "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png",
      price: 19.99,
      description:
        "A very interesting book about so many even more interesting things!"
    });
    res.redirect("/");
  });

exports.router = router;
exports.products = products;
