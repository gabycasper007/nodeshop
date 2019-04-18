const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(res.view("shop.html"));
});

module.exports = router;
