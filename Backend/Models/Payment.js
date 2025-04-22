const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
});

module.exports = mongoose.model("Payment", paymentSchema);
