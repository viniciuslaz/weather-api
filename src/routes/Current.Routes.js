const express = require("express");
const router = express.Router();
const controller = require("../controllers/Current.Controller");

router.get("/", controller.Busca);

module.exports = router;
