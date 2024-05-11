const express = require("express");
const { handleSearchUsedCars } = require("../controllers/searchUsedCars");
const router = express.Router();

router.get("/", handleSearchUsedCars);

module.exports = router;
