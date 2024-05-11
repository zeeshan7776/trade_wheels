const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function handleResetPassword(req, res) {
  const { token } = req.params;
  const { password } = req.body;
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).send("Invalid or expired token.");
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  await User.updateOne(
    { _id: user._id },
    {
      password: hashedPassword,
      resetPasswordToken: undefined,
      resetPasswordExpires: undefined,
    }
  );

  res.send("Password has been reset.");
}
module.exports = {
  handleResetPassword,
};
