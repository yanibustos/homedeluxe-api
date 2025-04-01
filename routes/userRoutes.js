const express = require("express")
const userController = require("../controllers/userControllers")
const router = express.Router()


router.get("/", userController.index);
router.get("/create", userController.create);
router.post("/", userController.store);
router.get("/:id", userController.show);
router.get("/edit/:id", userController.edit);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);



module.exports = router;