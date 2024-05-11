const User = require("../models/user");

async function handleProfileUpdate(req, res) {
  console.log(req.body);
  try {
    const { userId, name, email, contactnumber, country, city } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        contactnumber,
        country,
        city,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to update user profile." });
  }
}

module.exports = {
  handleProfileUpdate,
};
