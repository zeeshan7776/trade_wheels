const popularNewCarAd = require("../models/popularNewCarAd");

async function handlePopularNewCarAd(req, res) {
  try {
    const cars = await popularNewCarAd.find({}).limit(13);
    res.status(200).json(cars);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching car ads", error: error.message });
  }
}

module.exports = { handlePopularNewCarAd };
