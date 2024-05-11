const newCarAd = require("../models/newCarAd");

async function handleNewCarsSpecificVariant(req, res) {
  try {
    const car = await newCarAd.findOne(
      { "variants.model": req.params.variantModel },
      { "variants.$": 1 }
    );
    res.json(car.variants[0]);
  } catch (error) {
    res.status(404).send("Variant not found");
  }
}

module.exports = { handleNewCarsSpecificVariant };
