const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const requireAuth = checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] });

router.get("/", categoryController.index);
router.get("/create", requireAuth, categoryController.create);
router.post("/", requireAuth, categoryController.store);
router.get("/:id", categoryController.show);
router.get("/edit/:id", requireAuth, categoryController.edit);
router.patch("/:id", requireAuth, categoryController.update);
router.delete("/:id", requireAuth, categoryController.destroy);

module.exports = router;
