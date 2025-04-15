import React from "react";
import logo from './assets/JwelleryHaven.png';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="container mx-auto grid grid-cols-4 gap-6 text-center md:text-left">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="Jewellery Haven Logo" className="w-28 h-28 mb-3" />

                    <h2 className="text-lg font-bold">JewelleryHaven</h2>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline">
                                Order Information
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Payment Options
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Product Information
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Explore</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline">
                                About JewelleryHaven
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contest Details
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="mailto:vjilka852@gmail.com" className="hover:underline">
                                vjilka852@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">vjilka852</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Vaibhavi Jilka</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
