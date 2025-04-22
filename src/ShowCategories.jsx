import React, { useEffect, useState } from 'react';

const ShowCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching collections:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Categories</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Image</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.categoriesType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.jewelleryId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.jewelleryName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.jewelleryPrice}</td>
                <td className="px-6 py-4">
                  <img
                    src={`http://localhost:3001/uploads/${item.jewelleryImage}`}
                    alt={item.jewelleryName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowCategories;
