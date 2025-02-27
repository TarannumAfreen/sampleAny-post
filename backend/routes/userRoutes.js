const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser); // Register a new user
router.post("/login", loginUser); // Log in an existing user
router.get("/profile", protect, getUserProfile); // Get user profile (protected)

module.exports = router;
