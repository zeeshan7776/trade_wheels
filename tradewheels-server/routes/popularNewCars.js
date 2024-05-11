const express = require("express");
const router = express.Router();
const { handlePopularNewCarAd } = require("../controllers/popularNewCars");

// Route to get all car ads
router.get("/", handlePopularNewCarAd);

module.exports = router;
