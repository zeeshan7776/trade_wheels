const carAd = require("../models/carAd");

async function handlePostAnAdd(req, res) {
  try {
    const {
      city,
      year,
      make,
      model,
      assembly,
      bodyType,
      engineCapacity,
      registeredIn,
      exteriorColor,
      mileage,
      price,
      description,
      averageMin,
      averageMax,
      fuelType,
      transmission,
      images,
    } = req.body;
    const userID = req.userID;

    const duplicate = await carAd.findOne({
      userID,
      city,
      year,
      make,
      model,
      engineCapacity,
      registeredIn,
    });

    if (duplicate) {
      return res
        .status(400)
        .json({ error: "You've already created an ad with similar details." });
    }

    const imagePaths = req.files.map((file) => file.path);

    const newAd = new carAd({
      userID,
      city,
      year,
      make,
      model,
      assembly,
      bodyType,
      engineCapacity,
      registeredIn,
      exteriorColor,
      mileage,
      price,
      description,
      averageMin,
      averageMax,
      fuelType,
      transmission,
      images: imagePaths,
    });

    const savedAd = await newAd.save();

    res.status(201).json(newAd);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Posting an Add Error", details: error.message });
  }
}

module.exports = { handlePostAnAdd };
