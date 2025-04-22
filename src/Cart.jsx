import React from "react";
import { useCart } from "./CartContext";
import { FaTrash } from "react-icons/fa"; // Delete icon

const Cart = () => {
  const { cartItems, removeFromCartById } = useCart(); // Updated to use remove by ID

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="mb-4 p-4 border rounded shadow-sm flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20" />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>Color: {item.color}</p>
                <p>Metal: {item.metal}</p>
                <p className="text-green-600 font-bold">₹{item.price}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCartById(item.id)}
              className="text-red-600 hover:text-red-800"
              title="Remove from Cart"
            >
              <FaTrash className="text-xl" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
