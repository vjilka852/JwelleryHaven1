import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategoriesForm = () => {
  const navigate = useNavigate();
  const [categoriesType, setCategoriesType] = useState('');
  const [jewelleryId, setJewelleryId] = useState('');
  const [jewelleryName, setJewelleryName] = useState('');
  const [jewelleryPrice, setJewelleryPrice] = useState('');
  const [jewelleryImage, setJewelleryImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setJewelleryImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("categoriesType", categoriesType);
    formData.append("jewelleryId", jewelleryId);
    formData.append("jewelleryName", jewelleryName);
    formData.append("jewelleryPrice", jewelleryPrice);
    formData.append("jewelleryImage", jewelleryImage);

    try {
      const response = await fetch("http://localhost:3001/api/categories", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Category added successfully!");
        navigate("/showcategories");
      } else {
        alert("Failed to add category.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }

    // Clear form fields after submission
    setCategoriesType('');
    setJewelleryId('');
    setJewelleryName('');
    setJewelleryPrice('');
    setJewelleryImage(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Categories</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="categoriesType" className="block text-sm font-medium text-gray-700">
            Categories type
          </label>
          <input
            type="text"
            id="categoriesType"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={categoriesType}
            onChange={(e) => setCategoriesType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="jewelleryId" className="block text-sm font-medium text-gray-700">
            Jewellery Id
          </label>
          <input
            type="text"
            id="jewelleryId"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={jewelleryId}
            onChange={(e) => setJewelleryId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="jewelleryName" className="block text-sm font-medium text-gray-700">
            Jewellery Name
          </label>
          <input
            type="text"
            id="jewelleryName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={jewelleryName}
            onChange={(e) => setJewelleryName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="jewelleryPrice" className="block text-sm font-medium text-gray-700">
            Jewellery Price
          </label>
          <input
            type="text"
            id="jewelleryPrice"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={jewelleryPrice}
            onChange={(e) => setJewelleryPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="jewelleryImage" className="block text-sm font-medium text-gray-700">
            Jewellery Image
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <label
              htmlFor="upload-button"
              className="relative cursor-pointer bg-white py-2 px-3 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
            >
              <span>
                <svg
                  className="w-5 h-5 inline-block mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                  />
                </svg>
                Upload file
              </span>
              <input
                id="upload-button"
                type="file"
                className="sr-only"
                onChange={handleImageChange}
              />
            </label>
            {jewelleryImage && (
              <span className="ml-2 text-gray-500 text-sm">
                {jewelleryImage.name}
              </span>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoriesForm;
