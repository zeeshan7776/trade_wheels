const User = require("../models/user");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email, // Your Gmail address
    pass: process.env.email_pass, // Your Gmail password or App Password
  },
});

async function handleForgotPassword(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send("User not found.");
  }

  const resetToken = crypto.randomBytes(20).toString("hex");
  const resetTokenExpire = Date.now() + 3600000; // 1 hour from now

  await User.updateOne(
    { _id: user._id },
    {
      resetPasswordToken: resetToken,
      resetPasswordExpires: resetTokenExpire,
    }
  );

  const resetLink = `http://localhost:3000/resetpassword/${resetToken}`;

  // Send the email
  let mailOptions = {
    from: `"Trade-Wheels" <helloengineer321@gmail.com>`, // sender address
    to: email, // list of receivers
    subject: "Password Reset Request", // Subject line
    html: `
      <p>You have requested to reset your password for Trade-Wheels. Please click on the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Password reset email sent.");
  });
}
module.exports = {
  handleForgotPassword,
};
