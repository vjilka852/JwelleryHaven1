const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../Models/Payment");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_order_${Math.random()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.verifyPayment = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");

  if (generatedSignature === razorpaySignature) {
    const payment = new Payment({
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    });

    await payment.save();
    res.status(200).json({ msg: "Payment verified successfully" });
  } else {
    res.status(400).json({ msg: "Invalid payment signature" });
  }
};
