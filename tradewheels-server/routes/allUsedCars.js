const express = require("express");
const { handleAllUsedCars } = require("../controllers/allUsedCars");
const router = express.Router();

router.get("/", handleAllUsedCars);

module.exports = router;
