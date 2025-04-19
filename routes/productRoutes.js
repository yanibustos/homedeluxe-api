const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const requireAuth = checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] });

router.get("/", productController.index);
router.get("/featured", productController.showByFeatured);
router.get("/create", requireAuth, productController.create);
router.get("/edit/:id", requireAuth, productController.edit);
router.get("/:id", productController.show);

router.post("/", requireAuth, productController.store);
router.patch("/:id", requireAuth, productController.update);
router.delete("/:id", requireAuth, productController.destroy);

module.exports = router;
