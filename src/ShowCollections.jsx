import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowCollections = () => {
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/api/collections")
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => console.error("Error fetching collections:", err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this collection?")) {
      fetch(`http://localhost:3001/api/collections/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message || "Collection deleted successfully");
          setCollections((prev) => prev.filter((item) => item._id !== id));
        })
        .catch((err) => console.error("Error deleting collection:", err));
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin-dashboard/addcollection/${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Collections</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {collections.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-700">{item.collectionType}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.collectionId}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.collectionName}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.collectionPrice}</td>
                <td className="px-6 py-4">
                  <img
                    src={`http://localhost:3001/uploads/${item.collectionImage}`}
                    alt={item.collectionName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowCollections;
