const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.index);
router.get("/featured", productController.showByFeatured);
router.get("/create", productController.create);
router.get("/edit/:id", productController.edit);
router.get("/:id", productController.show);

router.post("/", productController.store);
router.patch("/:id", productController.update);
router.delete("/:id", productController.destroy);

// router.get("/categories", productController.getProductCategories);
// router.get("/category/:category", productController.getProductsInCategory);

module.exports = router;
