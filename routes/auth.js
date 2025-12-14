import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const token = jwt.sign({ id: "demo" }, process.env.JWT_SECRET);
  res.json({ token });
});

export default router;
