// backend/services/categoryService.js
const Category = require('../Models/Category');

const createCategory = async (categoryData) => {
  try {
    const newCategory = new Category(categoryData);
    const savedCategory = await newCategory.save();
    return savedCategory;
  } catch (error) {
    console.error('Error creating category in service:', error);
    throw error;
  }
};

// Add other service functions for fetching, updating, deleting categories
const getAllCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.error('Error fetching all categories in service:', error);
    throw error;
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  // Export other service functions
};