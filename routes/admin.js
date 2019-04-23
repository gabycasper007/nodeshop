const express = require("express");
const router = express.Router();
const adminCtrls = require("../controllers/admin");

module.exports = router
  .get("/add-product", adminCtrls.getAddProduct)
  .post("/add-product", adminCtrls.postAddProduct)
  .get("/products", adminCtrls.viewProducts)
  .get("/product/edit/:id", adminCtrls.editProduct)
  .post("/product/patch/:id", adminCtrls.patchProduct)
  .post("/product/delete/:id", adminCtrls.deleteProduct);
