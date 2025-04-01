const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const { checkAuth } = require("../middlewares/checkAuth");

router.get("/users", checkAuth, pagesController.userProfile);

module.exports = router;



// se debe cambiar a router.get("/:id", checkAuth, pagesController.userProfile); cuando lo vinculen al front