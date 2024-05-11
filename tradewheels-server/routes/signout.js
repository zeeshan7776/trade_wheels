const express = require("express");
const { handleUserSignout } = require("../controllers/signout");
const router = express.Router();

router.post("/", handleUserSignout);

module.exports = router;
