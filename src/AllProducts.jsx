import React from "react";
import ring from "./assets/ring.jpg"; 
import ring1 from "./assets/ring1.png";
import ring2 from "./assets/ring2.png";
import ring3 from "./assets/ring3.jpg";
import ring4 from "./assets/ring4.webp";
import ring5 from "./assets/ring5.jpg";

import { useNavigate } from "react-router-dom"; 

const products = [
    {
        id: 1,
        image: ring,
        title: "Unexpected Texture: The Gold Ring with a Twist",
        price: 10000,
    },
    {
        id: 2,
        image: ring1,
        title: "The White Dimond Ring",
        price: 10000,
    },
    {
        id: 3,
        image: ring2,
        title: "The Ring With Pink Dimond",
         price: 10000,
    },
    {
        id: 4,
        image: ring3,
        title: "Gold with Dimonds Ring",
        price: 10000,
    },
    {
        id: 5,
        image: ring4,
        title: "Silver Ring",
        price: 10000,
    },
    {
        id: 6,
        image: ring5,
        title: "Rose Gold Ring",
        price: 10000,
    },
];

const ProductGrid = () => {
    const navigate = useNavigate(); 
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Our Collection</h2>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 w-72">
                        <div className="relative bg-gray-100 rounded-lg flex justify-center items-center h-80">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-700 font-bold text-lg">{product.price}</p>
                            <button onClick={() => navigate(`/product`)} className="mt-3 px-5 py-2 bg-black text-white text-sm rounded-md">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
