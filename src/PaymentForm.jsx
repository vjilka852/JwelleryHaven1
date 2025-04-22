import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PaymentForm = () => {
  const { amount } = useParams(); // Get from URL

  const handlePayment = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/api/payment/create-order", { amount });

      const options = {
        key: "rzp_test_anVIneTqhlPeiU",
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        handler: async (response) => {
          const verifyRes = await axios.post("http://localhost:3001/api/payment/verify-payment", {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          });

          alert("Payment Success");
        },
        theme: { color: "#6366F1" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error(err);
      alert("Payment Failed");
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Pay ₹{amount}</h2>
      <button
        onClick={handlePayment}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentForm;
