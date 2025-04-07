const express = require("express")
const productController = require("../controllers/productController")
const router = express.Router()


router.get("/", productController.index);
//router.get("/categories", productController.getProductCategories);
//router.get("/category/:category", productController.getProductsInCategory);
router.get("/:id", productController.show);


router.get("/create", productController.create);
router.post("/", productController.store);

router.get("/edit/:id", productController.edit);
router.patch("/:id", productController.update);

router.delete("/:id", productController.destroy);



module.exports = router;