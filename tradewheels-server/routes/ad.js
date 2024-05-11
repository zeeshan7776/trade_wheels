const express = require("express");
const { handleAd } = require("../controllers/ad");
const router = express.Router();

router.get("/:id", handleAd);

module.exports = router;
