const express = require("express");
const { handleAutoSignIn } = require("../controllers/autoLogin");
const auth = require("../middlewares/auth");
const router = express.Router();

// Here we implement the middleware login for "/home" page in which we check that if token exist in cookie than the home page is shown otherwise not
router.get("/", handleAutoSignIn);

module.exports = router;
