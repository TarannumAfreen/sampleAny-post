const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract token from "Bearer <token>"

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the authenticated user to the request object (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Proceed to the next middleware/controller
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token provided");
  }
});

module.exports = { protect };
