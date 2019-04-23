const express = require("express");
const router = express.Router();
const productCtrls = require("../controllers/products");

router
  .get("/add-product", productCtrls.getAddProduct)
  .post("/add-product", productCtrls.postAddProduct);

exports.router = router;
