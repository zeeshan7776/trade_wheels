const express = require("express");
const { handleCompanyAllNewCars } = require("../controllers/companyAllNewCars");
const router = express.Router();

router.get("/", handleCompanyAllNewCars);

module.exports = router;
