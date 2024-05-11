async function handleUserProfile(req, res) {
  console.log("Profile-Details Server Route!");
  res.json({
    user: req.rootUser,
    ads: req.userAds,
  });
}

module.exports = {
  handleUserProfile,
};
