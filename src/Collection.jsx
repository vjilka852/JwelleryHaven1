import React from "react";
import { useNavigate } from "react-router-dom"; 
import gift from "./assets/gift.png"
import bride from "./assets/bride.jpeg";
import gold from "./assets/gold.jpg";


const collections = [
    { name: "Gift Collections", image: gift},
    { name: "Bridal Collections", image: bride },
    { name: "Gold Jewelry", image: gold },
   
];

const ShopByCollection = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-col items-center py-10 bg-white-100">
            <h2 className="text-xl font-bold mb-6 uppercase">Shop by Collection</h2>

            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl px-4">
                {collections.map((collection, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
                        <img
                            src={collection.image}
                            alt={collection.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{collection.name}</h3>
                            <button onClick={() => navigate(`/collection/gift`)} className="mt-2 px-4 py-2 bg-black text-white text-sm rounded-md">
                                Explore Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button  onClick={() => navigate(`/collections`)} className="mt-8 px-6 py-3 bg-black text-white text-lg rounded-md">
                View All
            </button>
        </div>
    );
};

export default ShopByCollection;
