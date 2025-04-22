import React, { createContext, useContext, useState } from "react";

// Create CartContext
const CartContext = createContext();

// CartProvider to wrap the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove item by id
  const removeFromCartById = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Clear cart (optional functionality)
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCartById, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
