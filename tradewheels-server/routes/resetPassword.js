const express = require("express");
const { handleResetPassword } = require("../controllers/resetPassword");
const router = express.Router();

// Here we implement login server endpoint or API
router.post("/:token", handleResetPassword);

module.exports = router;
