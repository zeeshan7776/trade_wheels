const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function handleUserLogin(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      // Secret key
      process.env.db_jwtsecret,
      { expiresIn: "2d" }
    );
    res.cookie("jwtToken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });

    res.json({
      _id: user._id,
      email: user.email,
      message: "Login successful!",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = {
  handleUserLogin,
};
