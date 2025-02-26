const express = require("express");
const {
  createAd,
  getAllAds,
  getAdById,
  updateAd,
  deleteAd,
} = require("../controllers/adController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createAd); // Create an ad (protected route)
router.get("/", getAllAds); // Get all ads
router.get("/:id", getAdById); // Get a single ad by ID
router.put("/:id", protect, updateAd); // Update an ad (protected route)
router.delete("/:id", protect, deleteAd); // Delete an ad (protected route)

module.exports = router;
