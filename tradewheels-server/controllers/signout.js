async function handleUserSignout(req, res) {
  res.cookie("jwtToken", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).send({ message: "SignOut successfull!" });
}

module.exports = {
  handleUserSignout,
};
