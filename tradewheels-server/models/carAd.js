const mongoose = require("mongoose");

const carAdSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  city: { type: String, required: true },
  year: { type: Number, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  assembly: { type: String, required: true },
  bodyType: { type: String, required: true },
  engineCapacity: { type: Number, required: true },
  registeredIn: { type: String, required: true },
  exteriorColor: { type: String, required: true },
  mileage: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, optional: true },
  averageMin: { type: Number, required: true },
  averageMax: { type: Number, required: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  images: [{ type: String }], // URLs to image locations
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("carAd", carAdSchema);
