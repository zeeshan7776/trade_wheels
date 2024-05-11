const express = require("express");
const { handleAdUpdate } = require("../controllers/adUpdate");
const router = express.Router();

router.post("/", handleAdUpdate);

module.exports = router;
