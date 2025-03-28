const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const { checkAuth } = require("../middlewares/checkAuth");

router.get("/:id", checkAuth, pagesController.dashboard);

module.exports = router;