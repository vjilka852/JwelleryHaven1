import React from "react";
import { useNavigate } from "react-router-dom";
import rings from "./assets/ring.jpg";
import bracelets from "./assets/silverbarcelets.jpg";
import errings from "./assets/errings.png";
import necles from "./assets/chokar1.jpg";
import bangles from "./assets/silver bangles.webp";
import chain from "./assets/chain.webp";
import ankels from "./assets/silver ankles.png";

const products = [
    { id: 1, image: rings, name: "Dazzling Grace Diamond Ring" },
    { id: 2, image: bracelets, name: "Captivating Grace Infinity Bracelet" },
    { id: 3, image: errings, name: "Everyday Charm Diamond Stud Set"},
    { id: 4, image: necles, name: "Elegant Diamond Necklace"},
    { id: 5, image: bangles, name: "Gold-Plated Diamond Bangles"},
    { id: 6, image: chain, name: "Royal Diamond Jewelry Set" },
    { id: 7, image: ankels, name: "Floral Elegance Diamond Ring"},
    { id: 8, image: rings, name: "Silver Infinity Charm Bracelet" },
    { id: 9, image: chain, name: "Classic Gold Diamond Earrings" },
];

const ProductGrid = () => {
    const navigate = useNavigate(); 

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-center mb-6">All Categories</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                        <div className="relative bg-gray-100 rounded-lg flex justify-center items-center h-70">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            
                            
                            
                            <button
                                className="mt-3 px-5 py-2 bg-black text-white text-sm rounded-md"
                                onClick={() => navigate("/all-products")}
                            >
                                Explore More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
