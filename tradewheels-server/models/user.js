// here we setup database using mongoose
const mongoose = require("mongoose");

// here we define Schemas for database
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactnumber: { type: Number },
  country: { type: String, required: true },
  city: { type: String, required: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
});

User = mongoose.model("User", userSchema);

module.exports = User;
