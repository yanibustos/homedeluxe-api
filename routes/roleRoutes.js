const express = require("express")
const roleController = require("../controllers/roleController")
const router = express.Router()


router.get("/", roleController.index);
router.get("/create", roleController.create);
router.post("/", roleController.store);
router.get("/:id", roleController.show);
router.get("/edit/:id", roleController.edit);
router.patch("/:id", roleController.update);
router.delete("/:id", roleController.destroy);



module.exports = router;