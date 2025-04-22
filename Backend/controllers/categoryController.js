// controllers/categoryController.js
const Categories = require('../Models/Categories');


const addCategory = async (req, res) => {
  try {
    const { categoriesType, jewelleryId, jewelleryName, jewelleryPrice, jewelleryImage } = req.body;

    const newCategory = new Categories({
      categoriesType,
      jewelleryId,
      jewelleryName,
      jewelleryPrice,
      jewelleryImage,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json({ message: 'Category added successfully!', category: savedCategory });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ message: 'Failed to add category.', error: error.message });
  }
};

module.exports = {
  addCategory,
  // Add other controller functions for fetching, updating, deleting
};