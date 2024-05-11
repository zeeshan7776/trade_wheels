const CarAd = require("../models/carAd");

async function handleDeleteAd(req, res) {
  try {
    const { id } = req.params;
    const result = await CarAd.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Ad not found" });
    }
    res.send({ message: "Ad deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

module.exports = {
  handleDeleteAd,
};
