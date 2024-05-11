const express = require("express");
const { handleProfileUpdate } = require("../controllers/profileUpdate");
const router = express.Router();

router.post("/", handleProfileUpdate);

module.exports = router;
