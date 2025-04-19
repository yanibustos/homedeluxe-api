const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/tokens", authController.getToken);
router.post("/tokens/admin", authController.getAdminToken);
router.post("/reset-password", authController.requestPasswordReset);
router.post("/reset-password/:token", authController.resetPassword);
router.get("/resetDB", authController.resetDB);

module.exports = router;
