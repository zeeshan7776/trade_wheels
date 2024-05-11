const CarAd = require("../models/carAd");
const User = require("../models/user");

async function handleAd(req, res) {
  try {
    const carAd = await CarAd.findById(req.params.id);
    if (!carAd) {
      return res.status(404).send({ message: "Car Ad not found!" });
    }

    const user = await User.findById(carAd.userID);
    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    res.send({
      carAd,
      creators: {
        name: user.name,
        contactnumber: user.contactnumber,
      },
    });
  } catch (error) {
    res.status(500).send("Server Error: ", error);
  }
}

module.exports = {
  handleAd,
};
