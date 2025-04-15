const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    res.json({ success: true, user }); // Send full user data (you can remove password manually if needed)
  } catch (err) {
    console.log("Login error:", err);
    res.json({ success: false, message: "Server error" });
  }
});

// Register route
router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already exists" });
    }

    const user = await User.create(req.body);
    res.json({ success: true, user });
  } catch (err) {
    console.log("Register error:", err);
    res.json({ success: false, message: "Registration failed" });
  }
});

// Get user by ID (for profile etc.)
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.json({ success: false });
    res.json({ success: true, user });
  } catch (error) {
    console.log("Get user error:", error);
    res.json({ success: false });
  }
});

module.exports = router;
