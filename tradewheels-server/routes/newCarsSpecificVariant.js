const express = require("express");
const router = express.Router();
const {
  handleNewCarsSpecificVariant,
} = require("../controllers/newCarsSpecificVariant");

// Route to get all car ads
router.get("/:variantModel", handleNewCarsSpecificVariant);

module.exports = router;
