const express = require("express");
const router = express.Router();
const productCtrls = require("../controllers/products");

router.get("/", productCtrls.getHomepage);

module.exports = router;
