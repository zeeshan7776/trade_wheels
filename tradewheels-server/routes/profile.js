const express = require("express");
const { handleUserProfile } = require("../controllers/profile");
const router = express.Router();

router.get("/", handleUserProfile);

module.exports = router;
