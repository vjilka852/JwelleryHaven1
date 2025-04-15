import React from "react";
import { useNavigate } from "react-router-dom"; 
import ring from "./assets/ring.jpg";
import erring from "./assets/errings.png";
import pendenset from "./assets/gold chain.webp";

const categories = [
    { name: "Rings", image: ring },
    { name: "Errings", image: erring },
    { name: "Pendensets", image: pendenset },
];

const Categories = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center py-10 bg-white-100">
            <h2 className="text-xl font-bold mb-6 uppercase">Shop by Categories</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl px-4">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{category.name}</h3>
                            <button  onClick={() => navigate(`/all-products`)} className="mt-2 px-4 py-2 bg-black text-white text-sm rounded-md">
                                Explore Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button  onClick={() => navigate(`/all-categories`)} className="mt-8 px-6 py-3 bg-black text-white text-lg rounded-md">
                View All
            </button>
         
        
        </div>
    );
};

export default Categories;
