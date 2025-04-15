import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
        .then((res) => {
          if (res.data.success) {
            const user = res.data.user;
            localStorage.setItem("userId", user._id); // store MongoDB ID
            login(user); // save in context
            navigate("/user-panel");
          } else {
            alert("Invalid credentials");
          }
        })
        .catch((err) => console.log(err));
      
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gray-50">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold text-center mb-6">Login To The JwelleryHaven</h2>

                <label className="block font-medium mb-2">Email</label>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                 <label className="block font-medium mb-2">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
