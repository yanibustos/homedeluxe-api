const express = require("express");
const router = express.Router()
const userController = require("../controllers/userController");
const { checkAuth } = require("../middlewares/checkAuth");


/*
 * API endpoints relacionados a los usuarios.
 *
 * todos estos endpoints tienen como prefijo el string "/users",
 * tal como se definió en el archivo `routes/index.js`.
 * 
 * el wishlist solo se usará si hay tiempo 
 * router.get("/:id/wishlist", userController.showWishlist);
 * router.patch("/:username/wishlist", userController.addToWishlist);
 */

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.get("/register", userController.create)

router.use(checkAuth);

router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);




module.exports = router;