const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.index);
router.get("/create", orderController.create);
router.post("/", orderController.store);
router.get("/getOrdersByUser/:userId", orderController.getOrdersbyUser);
router.get("/:id", orderController.show);

router.get("/:id/edit", orderController.edit);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.destroy);

router.patch("/:id/status", orderController.updateStatus);

module.exports = router;
