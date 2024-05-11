const CarAd = require("../models/carAd");

async function handleAllUsedCars(req, res) {
  const { make, model, category, value, page = 1, limit = 12 } = req.query;
  const numericalLimit = parseInt(limit, 10);
  const offset = (page - 1) * numericalLimit;

  let query = {};

  if (make && model) {
    query.$and = [
      { make: new RegExp(make, "i") },
      { model: new RegExp(model, "i") },
    ];
  } else {
    if (make) {
      query.make = new RegExp(make, "i");
    }

    if (model) {
      query.model = new RegExp(model, "i");
    }
  }

  if (category) {
    const categoryLower = category.toLowerCase();
    switch (categoryLower) {
      case "automatic":
      case "manual":
        query.transmission = { $regex: new RegExp(categoryLower, "i") };
        break;
      case "1000":
      case "1300":
      case "1800":
      case "660":
        query.engineCapacity = parseInt(categoryLower, 10);
        break;
      default:
        return res.status(400).json({ error: "Unknown category" });
    }
  }

  if (value) {
    const searchTerm = new RegExp(value, "i");
    query.$or = [
      { make: { $regex: searchTerm } },
      { model: { $regex: searchTerm } },
    ];
  }

  try {
    const allAds = await CarAd.find(query)
      .sort({ createdAt: -1 })
      .limit(numericalLimit)
      .skip(offset);
    const total = await CarAd.countDocuments(query);
    res.json({ ads: allAds, hasMore: total > offset + allAds.length });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  handleAllUsedCars,
};
