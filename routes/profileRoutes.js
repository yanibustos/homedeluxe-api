const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const { checkAuth } = require("../middlewares/checkAuth");

router.get("/:id", checkAuth, profileController.profile);

module.exports = router;
