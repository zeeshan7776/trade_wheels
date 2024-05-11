async function handleAutoSignIn(req, res) {
  console.log("PostAnAdd Server Route!");
  res.send(req.rootUser);
}

module.exports = { handleAutoSignIn };
