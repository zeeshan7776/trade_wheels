const CarAd = require("../models/carAd");

async function handleAdUpdate(req, res) {
  const { body, files } = req; // files will contain the uploaded images
  try {
    const updateData = { ...body, images: files.map((file) => file.path) };
    const adId = body.adID;
    const updatedAd = await CarAd.findByIdAndUpdate(adId, updateData, {
      new: true,
    });

    if (!updatedAd) {
      return res.status(404).json({ message: "Ad not found." });
    }

    res.json(updatedAd);
  } catch (error) {
    res.status(500).json({ message: "Failed to update Ad." });
  }
}

module.exports = {
  handleAdUpdate,
};
