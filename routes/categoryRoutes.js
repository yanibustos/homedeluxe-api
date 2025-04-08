const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router.get("/", categoryController.index);
router.get("/create", categoryController.create);
router.post("/", categoryController.store);
router.get("/:id", categoryController.show);
router.get("/edit/:id", categoryController.edit);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);

module.exports = router;