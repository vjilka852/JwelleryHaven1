import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
            <ul className="flex space-x-6 text-sm">
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link to="/collections">Collections</Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                    <Link to="/all-categories">Categories</Link>
                </li>
            </ul>

            <div className="flex space-x-2 items-center">
                {user ? (
                    <>
                        <span className="mr-3 text-sm font-medium">
                            Welcome, {user.name || "User"}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="bg-gray-200 text-black px-3 py-1 rounded-md text-sm hover:bg-gray-300 transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-gray-200 text-black px-3 py-1 rounded-md text-sm hover:bg-gray-300 transition"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="bg-gray-200 text-black px-3 py-1 rounded-md text-sm hover:bg-gray-300 transition"
                        >
                            Register
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Header;
