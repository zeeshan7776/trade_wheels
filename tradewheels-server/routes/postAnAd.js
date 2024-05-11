const express = require("express");
const { handlePostAnAdd } = require("../controllers/postAnAd");
const router = express.Router();

// Here we implement the middleware login for "/home" page in which we check that if token exist in cookie than the home page is shown otherwise not
router.post("/", handlePostAnAdd);

module.exports = router;
