const User = require("../models/user");
var bcrypt = require("bcryptjs");

async function handleSignupUser(req, res) {
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  if (password === confirmpassword) {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.contactnumber = req.body.contactnumber;
    user.country = req.body.country;
    user.city = req.body.city;
    user.password = await bcrypt.hash(password, 10);
    user.confirmpassword = await bcrypt.hash(confirmpassword, 10);
    const doc = await user.save();

    res.json(doc);
  } else {
    res.status(400).json({ error: "Incorrect Password!!!" });
  }
}

module.exports = {
  handleSignupUser,
};
