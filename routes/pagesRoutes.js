const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const { checkAuth } = require("../middlewares/checkAuth");

router.get("/", checkAuth, pagesController.Home);

module.exports = router;