const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  collectionType: String,
  collectionId: String,
  collectionName: String,
  collectionPrice: String,
  collectionImage: String, // Store filename
});

module.exports = mongoose.model('Collection', collectionSchema);
