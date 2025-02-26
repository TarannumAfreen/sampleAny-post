const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const adRoutes = require("./routes/adRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/ads", adRoutes);
app.use("/api/users", userRoutes);

// Middleware for handling errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
