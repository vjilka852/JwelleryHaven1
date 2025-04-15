import React from "react";
import gift from "./assets/chokar1.jpg";
import bride from "./assets/pendentset2.webp";
import gold from "./assets/silverbarcelets.jpg";



const collections = [
    { name: "Gift Collections", image: gift},
    { name: "Bridal Collections", image: bride },
    { name: "Gold Jewelry", image: gold },
   
];

const PerticularGift = () => {
    return (
        <div className="w-full flex flex-col items-center py-10 bg-white-100">
            <h2 className="text-xl font-bold mb-6 uppercase">All Types Of Gift Collections</h2>

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
                            <button className="mt-2 px-4 py-2 bg-black text-white text-sm rounded-md">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
          
        </div>
    );
};

export default PerticularGift;
