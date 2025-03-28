const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { checkAuth } = require("../middlewares/checkAuth");

/*
 * API endpoints relacionados a los artículos.
 *
 * Notar que todos estos endpoints tienen como prefijo el string "/products",
 * tal como se definió en el archivo `routes/index.js`.
 * router.patch("/:id/wishlist", productController.wishlist);
 */

router.get("/", productController.index);
router.get("/:id", productController.show);


router.use(checkAuth);


router.post("/", productController.store);
router.patch("/:id", productController.update);
router.delete("/:id", productController.destroy);



module.exports = router;
