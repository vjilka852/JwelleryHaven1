import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import gift from "./assets/gift.png";
import gold from "./assets/gold collections.jpg";
import silver from "./assets/silver Collections.webp";
import dimond from "./assets/Dimond Collectons.webp";
import wedding from "./assets/Wedding Collections.jpg";
import tradistional from "./assets/tradistional collections.webp";
import daily from "./assets/daily eare collection.webp";
import special from "./assets/special occations.webp";
import excusive from "./assets/exculsive collections.jpg";


// Collection data with navigation paths
const collection = [
    { name: "Gift Collections", image: gift, path: "gift" },
    { name: "Gold Collections", image: gold, path: "gold" },
    { name: "Silver Collections", image: silver, path: "silver" },
    { name: "Diamond Collections", image: dimond, path: "diamond" },
    { name: "Wedding Collections", image: wedding, path: "wedding" },
    { name: "Traditional & Festival Collections", image: tradistional, path: "traditional" },
    { name: "Daily Wear Collections", image: daily, path: "daily" },
    { name: "Special Occasion Collections", image: special, path: "special" },
    { name: "Designer & Exclusive Collection", image: excusive, path: "exclusive" },
];

const Allcollections = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center py-10 bg-white-100">
            <h2 className="text-xl font-bold mb-6 uppercase">All Collections</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl px-4">
                {collection.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <button
                                className="mt-2 px-4 py-2 bg-black text-white text-sm rounded-md"
                                onClick={() => navigate(`/collection/gift`)}
                            >
                                Explore Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Allcollections;
