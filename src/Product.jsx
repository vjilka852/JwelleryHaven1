import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { allProducts } from "./AllProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-600 mt-20">Product not found</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-20">
        <div className="mb-10 md:mb-0 md:mr-16">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-cover rounded-md shadow-md"
          />
        </div>

        <div className="text-left max-w-md">
          <h2 className="text-xl font-medium mb-2">{product.title}</h2>
          <p className="text-2xl font-semibold mb-6">₹{product.price}</p>

          <h3 className="text-lg font-semibold mb-2">Product Specification</h3>
          <p className="mb-1">
            <span className="font-semibold">Base Metal:</span> {product.metal}
          </p>
          <p className="mb-6">
            <span className="font-semibold">Color:</span> {product.color}
          </p>

          <div className="flex gap-6">
          <button
  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
  onClick={() => {
    navigate(`/payment/${product.price}`);
  }}
>
  Buy Now
</button>

            <button
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition"
              onClick={() => {
                addToCart(product);
                navigate("/cart"); // navigate to cart page after adding
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
