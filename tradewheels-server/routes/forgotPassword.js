const express = require("express");
const { handleForgotPassword } = require("../controllers/forgotPassword");
const router = express.Router();

// Here we implement login server endpoint or API
router.post("/", handleForgotPassword);

module.exports = router;
