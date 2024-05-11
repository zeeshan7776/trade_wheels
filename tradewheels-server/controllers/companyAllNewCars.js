const newCarAd = require("../models/newCarAd");

async function handleCompanyAllNewCars(req, res) {
  try {
    const { make, limit } = req.query;
    let query = {};

    if (make) {
      query.make = new RegExp(`^${make}$`, "i");
    }

    const allAds = await newCarAd
      .find(query)
      .sort({ createdAt: -1 })
      .limit(Number(limit) || 5);
    res.json({ ads: allAds });
  } catch (error) {
    console.error("Error fetching ads:", error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  handleCompanyAllNewCars,
};
