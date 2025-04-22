import React from "react";
import { FaPlus, FaBox, FaUsers, FaUser, FaList, FaThLarge  } from "react-icons/fa";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AddCategories from "./AddCategories";
import AddCollections from "./AddCollections";
import OrderDetails from "./OrderDetails";
import UserDetails from "./UserDetails";
import Profile from "./Profile";

const AdminPanel = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname === "/admin-dashboard"; // Corrected check

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-black text-white text-center text-2xl font-bold py-6">
        Welcome To Admin Dashboard
      </header>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 min-h-screen p-6 space-y-6">
          <nav className="flex flex-col gap-4 text-gray-700 text-sm">
            {/* Add Categories */}
            <Link to="/admin-dashboard/add-categories" className="flex items-center gap-2">
              <FaPlus className="text-xl text-black" />
              <span>Add Categories</span>
            </Link>

              {/* Show All Categories*/}
              <Link to="/admin-dashboard/showcategories" className="flex items-center gap-2">
              <FaList className="text-xl text-black" />
              <span>Show All Categories</span>
            </Link>

            {/* Add Collections */}
            <Link to="/admin-dashboard/add-collections" className="flex items-center gap-2">
              <FaBox className="text-xl text-black" />
              <span>Add Collections</span>
            </Link>

             {/* show all collection */}
             <Link to="/admin-dashboard/showcollections" className="flex items-center gap-2">
             <FaThLarge className="text-xl text-black" />
              <span>Show All Collections</span>
            </Link>

           
            {/* User Details */}
            <Link to="/admin-dashboard/user-details" className="flex items-center gap-2">
              <FaUsers className="text-xl text-black" />
              <span>User Details</span>
            </Link>

           
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="border p-6 rounded-md bg-white shadow-md">
            {/* Dynamic Content Based on Selected Sidebar Item */}
            <div className="flex justify-between mb-6">
              <h2 className="font-semibold text-lg">
                {isAdminDashboard ? "Admin Dashboard" : location.pathname.split('/').pop().replace('-', ' ')}
              </h2>
            </div>

            {/* Define Routes for Dynamic Content */}
            <Routes>
              <Route path="add-categories" element={<AddCategories />} /> {/* Removed leading slash */}
              <Route path="add-collections" element={<AddCollections />} /> {/* Removed leading slash */}
              <Route path="order-details" element={<OrderDetails />} /> {/* Removed leading slash */}
              <Route path="user-details" element={<UserDetails />} /> {/* Removed leading slash */}
              <Route path="profile" element={<Profile />} /> {/* Removed leading slash */}
              {/* Optionally, a default route for the main admin dashboard */}
              <Route path="" element={<p>Welcome to the main Admin Dashboard content!</p>} /> {/* Removed leading slash */}
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;