import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const[name,setName] = useState()
  const[email,setEmail] = useState()

  const[password,setPassword] = useState()


  const handleSubmit = (e) => {
    e.preventDefault(); 
  
    axios.post('http://localhost:3001/api/users/register', { name, email, password })

      .then(result => {
        console.log(result);
        if (result.data) {
          alert(" Registered successfully! Redirecting to login...");
          navigate("/login"); 
        }
      })
      .catch(err => {
        console.error(err);
        alert(" Registration failed. Please try again.");
      });
  }
  

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
   
      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-2xl font-semibold mb-6">Sign Up With Jewelery Haven</h2>
        <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <label className="block font-medium mb-2">Name</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Value" onChange={(e) => setName(e.target.value)}  />
          <label className="block font-medium mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded mb-4" placeholder="Value" onChange={(e) => setEmail(e.target.value)} />

          <label className="block font-medium mb-2">Password</label>
          <input type="password" className="w-full p-2 border rounded mb-4" placeholder="Value" onChange={(e) => setPassword(e.target.value)} />

         

       

      

          <button className="w-full bg-black text-white py-2 rounded">Sign Up</button>
        </div>
        </form>
      </div>

 
    </div>
  );
};

export default Register;

