const express = require("express");
const { handleSignupUser } = require("../controllers/user");

const router = express.Router();

// here we implement signup router endpoint or API
router.post("/", handleSignupUser);

module.exports = router;
