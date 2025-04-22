
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  categoriesType: { type: String, required: true },
  jewelleryId: { type: String, required: true },
  jewelleryName: { type: String, required: true },
  jewelleryPrice: { type: Number, required: true },
  jewelleryImage: { type: String }, // Store the image path or URL
  // Add any other relevant properties
});

module.exports = mongoose.model('Categories', CategorySchema);