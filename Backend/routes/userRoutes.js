const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const bcrypt = require("bcrypt"); 
const User = require("../Models/User"); 
const razorpayInstance = require("../config/razorpay");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: "Invalid email" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid password" });

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.post("/admin-login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Admin login attempt:", email, password);

  try {
    const user = await User.findOne({ email });
    console.log("Found user:", user);

    if (!user) {
      return res.status(404).json({ success: false, message: "Admin not found" });
    }

    if (user.role !== "admin") {
      return res.status(401).json({ success: false, message: "Not an admin" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.log("Admin login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});





// ✅ REGISTER USER OR ADMIN
router.post("/register", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ email, password: hashedPassword, role: role || "user" });
    await newUser.save();

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/', async (req, res) => {
  const users = await User.find(); 
  res.json(users);
});



module.exports = router;
