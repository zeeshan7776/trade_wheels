const jwt = require("jsonwebtoken");
const User = require("../models/user");
const CarAd = require("../models/carAd");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;

    if (!token) {
      return res.status(401).send("Unauthorized: No token provided.");
    }

    const verifyToken = jwt.verify(token, process.env.db_jwtsecret);

    const rootUser = await User.findOne({ _id: verifyToken.id });
    if (!rootUser) {
      return res.status(404).send("User Not Found!");
    }

    // Fetch all ads created by the authenticated user
    const userAds = await CarAd.find({ userID: rootUser._id });
    if (!userAds) {
      return res.status(404).send("User Ads Not Found!");
    }
    console.log("User Ads: ", userAds);

    // Save the fetched data to the request object
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    req.userAds = userAds;

    next();
  } catch (error) {
    res.status(401).send("Unauthorized: Invalid token.");
    console.log(error);
  }
};

module.exports = auth;
