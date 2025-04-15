import React from "react";
import ring from "./assets/ring.jpg";
import { useNavigate } from "react-router-dom"; 

const ProductDetails = () => {
    const navigate = useNavigate(); 
    return (
        <div className="min-h-screen bg-white">
          
           

            
            <div className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-20">
                
                <div className="mb-10 md:mb-0 md:mr-16">
                    <img src={ring} alt="Gold Ring" className="w-80 h-80 object-cover rounded-md shadow-md" />
                </div>

                
                <div className="text-left max-w-md">
                    <h2 className="text-xl font-medium mb-2">"Unexpected Texture: The Gold Ring with a Twist"</h2>
                    <p className="text-2xl font-semibold mb-6">10000</p>

                    <h3 className="text-lg font-semibold mb-2">Product Specification</h3>
                    <p className="mb-1"><span className="font-semibold">Base Metal:</span> Gold</p>
                    <p className="mb-6"><span className="font-semibold">Color:</span> Gold Pink</p>

                    <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                        Buy Now
                    </button>
                </div>
            </div>

         
        </div>
    );
};

export default ProductDetails;
