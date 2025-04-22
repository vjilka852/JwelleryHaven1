import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false); // Track if the user is logging in as admin

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = isAdmin 
    ? "http://localhost:3001/api/users/admin-login"
    : "http://localhost:3001/api/users/login";
  

    axios
      .post(url, { email, password })
      .then((res) => {
        if (res.data.success) {
          const user = res.data.user;
          localStorage.setItem("userId", user._id); // store MongoDB ID
          login(user); // save in context

          // Navigate based on user type
          if (isAdmin) {
            navigate("/admin-dashboard");
          } else {
            navigate("/user-panel");
          }
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
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login To The JewelleryHaven
        </h2>

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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Login As {isAdmin ? "Admin" : "User"}
        </button>

        {/* Mode Switch Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setIsAdmin(false)}
            className={`w-full py-2 rounded-md ${!isAdmin ? "bg-gray-300" : "bg-gray-500"} transition`}
          >
            Login as User
          </button>
          <button
            type="button"
            onClick={() => setIsAdmin(true)}
            className={`w-full py-2 rounded-md ${isAdmin ? "bg-gray-300" : "bg-gray-500"} transition`}
          >
            Login as Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
