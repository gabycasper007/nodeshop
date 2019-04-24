const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth");

module.exports = router
  .get("/login", authCtrl.getLogin)
  .post("/login", authCtrl.postLogin);
