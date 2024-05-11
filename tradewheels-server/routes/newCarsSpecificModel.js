const express = require("express");
const router = express.Router();
const {
  handleNewCarsSpecificModel,
} = require("../controllers/newCarsSpecificModel");

// Route to get all car ads
router.get("/:id", handleNewCarsSpecificModel);

module.exports = router;
