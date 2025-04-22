const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const razorpayInstance = require("../config/razorpay");

// ✅ CREATE ORDER
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    const options = {
      amount: amount * 100, 
      currency: "INR",
      receipt: `receipt_order_${Math.floor(Math.random() * 10000)}`,
      payment_capture: 1, 
    };

    const order = await razorpayInstance.orders.create(options);
    return res.status(200).json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({ message: "Order creation failed", error: error.message });
  }
});

// ✅ VERIFY PAYMENT SIGNATURE
router.post("/verify-payment", (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    const body = `${razorpayOrderId}|${razorpayPaymentId}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpaySignature) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature" });
    }
  } catch (err) {
    console.error("Payment verification error:", err);
    return res.status(500).json({ message: "Error verifying payment", error: err.message });
  }
});

module.exports = router;
