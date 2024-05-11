const express = require("express");
const { handleDeleteAd } = require("../controllers/deleteAd");
const router = express.Router();

router.delete("/:id", handleDeleteAd);

module.exports = router;
