const newCarAd = require("../models/newCarAd");

const mongoose = require("mongoose");

async function handleNewCarsSpecificModel(req, res) {
  try {
    const carId = req.params.id;
    console.log("CarId: ", carId);
    if (!mongoose.Types.ObjectId.isValid(carId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const car = await newCarAd.findById(carId);
    console.log("Car Model: ", car);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json(car);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

module.exports = { handleNewCarsSpecificModel };
