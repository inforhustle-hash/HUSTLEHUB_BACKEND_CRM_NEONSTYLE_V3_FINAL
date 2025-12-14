import express from "express";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("HustleHub Backend Running");
});

// REQUIRED for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

