const Ad = require("../models/adModel");

// Create a new ad
exports.createAd = async (req, res) => {
  try {
    const { title, description, price, category, image, user } = req.body;
    const newAd = new Ad({ title, description, price, category, image, user });

    await newAd.save();
    res.status(201).json({ message: "Ad posted successfully", ad: newAd });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all ads
exports.getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find().populate("user", "name email");
    res.status(200).json(ads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single ad by ID
exports.getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id).populate("user", "name email");
    if (!ad) return res.status(404).json({ message: "Ad not found" });

    res.status(200).json(ad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an ad
exports.updateAd = async (req, res) => {
  try {
    const updatedAd = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedAd) return res.status(404).json({ message: "Ad not found" });

    res.status(200).json({ message: "Ad updated successfully", ad: updatedAd });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an ad
exports.deleteAd = async (req, res) => {
  try {
    const deletedAd = await Ad.findByIdAndDelete(req.params.id);

    if (!deletedAd) return res.status(404).json({ message: "Ad not found" });

    res.status(200).json({ message: "Ad deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
