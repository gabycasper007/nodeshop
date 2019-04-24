const express = require("express");
const router = express.Router();
const productCtrls = require("../controllers/products");

module.exports = router
  .get("/", productCtrls.getHomepage)
  .get("/products/:id", productCtrls.getProduct)
  .get("/cart", productCtrls.getCart)
  .post("/cart", productCtrls.postCart)
  .post("/cart-delete-item", productCtrls.cartDeleteItem);
