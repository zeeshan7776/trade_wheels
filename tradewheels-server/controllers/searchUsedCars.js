const CarAd = require("../models/carAd");

async function handleSearchUsedCars(req, res) {
  const { search, page = 1, limit = 12 } = req.query;
  const numericalLimit = parseInt(limit, 10);
  const offset = (page - 1) * numericalLimit;

  let query = {};

  if (search) {
    const terms = search.split(" ").filter((term) => term.trim() !== "");
    if (terms.length === 1) {
      query.$or = [
        { make: new RegExp(terms[0], "i") },
        { model: new RegExp(terms[0], "i") },
      ];
    } else if (terms.length > 1) {
      query.$and = [
        { make: new RegExp(terms[0], "i") },
        { model: new RegExp(terms[1], "i") },
      ];
    }
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
  handleSearchUsedCars,
};
