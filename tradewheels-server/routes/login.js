const express = require("express");
const { handleUserLogin } = require("../controllers/login");
const router = express.Router();

// Here we implement login server endpoint or API
router.post("/", handleUserLogin);

module.exports = router;
