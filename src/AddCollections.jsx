import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddCollection = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // check if editing
  const [isEditMode, setIsEditMode] = useState(false);

  const [collectionType, setCollectionType] = useState('');
  const [collectionId, setCollectionId] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [collectionPrice, setCollectionPrice] = useState('');
  const [collectionImage, setCollectionImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      fetch(`http://localhost:3001/api/collections`)
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((item) => item._id === id);
          if (found) {
            setCollectionType(found.collectionType);
            setCollectionId(found.collectionId);
            setCollectionName(found.collectionName);
            setCollectionPrice(found.collectionPrice);
            setPreviewImage(`http://localhost:3001/uploads/${found.collectionImage}`);
          }
        });
    }
  }, [id]);

  const handleImageChange = (e) => {
    setCollectionImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('collectionType', collectionType);
    formData.append('collectionId', collectionId);
    formData.append('collectionName', collectionName);
    formData.append('collectionPrice', collectionPrice);
    if (collectionImage) {
      formData.append('collectionImage', collectionImage);
    }

    try {
      const url = id
        ? `http://localhost:3001/api/collections/${id}`
        : 'http://localhost:3001/api/collections';
      const method = id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (res.ok) {
        alert(`Collection ${id ? 'updated' : 'added'} successfully!`);
        navigate('/admin-dashboard/showcollections');
      } else {
        alert(`Failed to ${id ? 'update' : 'add'} collection`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Error while ${id ? 'updating' : 'adding'} collection`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
        {isEditMode ? 'Update' : 'Add'} Collection
      </h2>

      <div>
        <label htmlFor="collectionType" className="block text-sm font-medium text-gray-700">
          Collection Type
        </label>
        <input
          type="text"
          id="collectionType"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={collectionType}
          onChange={(e) => setCollectionType(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="collectionId" className="block text-sm font-medium text-gray-700">
          Collection ID
        </label>
        <input
          type="text"
          id="collectionId"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={collectionId}
          onChange={(e) => setCollectionId(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="collectionName" className="block text-sm font-medium text-gray-700">
          Collection Name
        </label>
        <input
          type="text"
          id="collectionName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="collectionPrice" className="block text-sm font-medium text-gray-700">
          Collection Price
        </label>
        <input
          type="text"
          id="collectionPrice"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          value={collectionPrice}
          onChange={(e) => setCollectionPrice(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="collectionImage" className="block text-sm font-medium text-gray-700">
          Collection Image
        </label>
        <div className="mt-1 flex items-center">
          <label
            htmlFor="upload-button"
            className="cursor-pointer bg-white py-2 px-3 rounded-md font-medium text-indigo-600 hover:text-indigo-500"
          >
            <svg
              className="w-5 h-5 inline-block mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
            Upload File
            <input
              id="upload-button"
              type="file"
              className="sr-only"
              onChange={handleImageChange}
            />
          </label>
          {collectionImage && (
            <span className="ml-2 text-gray-500 text-sm">{collectionImage.name}</span>
          )}
          {!collectionImage && previewImage && (
            <img src={previewImage} alt="preview" className="w-14 h-14 ml-4 rounded shadow" />
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900"
        >
          {isEditMode ? 'UPDATE' : 'ADD'}
        </button>
      </div>
    </form>
  );
};

export default AddCollection;
