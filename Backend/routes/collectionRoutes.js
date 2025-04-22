const express = require('express');
const router = express.Router();
const multer = require('multer');
const Collection = require('../Models/collection');

// Multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder to store images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// POST: Add Collection
router.post('/', upload.single('collectionImage'), async (req, res) => {
    try {
      const { collectionType, collectionId, collectionName, collectionPrice } = req.body;
      const newCollection = new Collection({
        collectionType,
        collectionId,
        collectionName,
        collectionPrice,
        collectionImage: req.file ? req.file.filename : null,
      });
      await newCollection.save();
      res.status(201).json({ message: 'Collection added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error saving collection' });
    }
  });

// GET all collections
router.get('/', async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Delete collection by ID
router.delete('/:id', async (req, res) => {
    try {
      await Collection.findByIdAndDelete(req.params.id);
      res.json({ message: 'Collection deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting collection' });
    }
  });
  
  // PUT: Update collection by ID
  router.put('/:id', upload.single('collectionImage'), async (req, res) => {
    try {
      const { collectionType, collectionId, collectionName, collectionPrice } = req.body;
      const updateData = {
        collectionType,
        collectionId,
        collectionName,
        collectionPrice,
      };
  
      if (req.file) {
        updateData.collectionImage = req.file.filename;
      }
  
      await Collection.findByIdAndUpdate(req.params.id, updateData);
      res.json({ message: 'Collection updated successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error updating collection' });
    }
  });

module.exports = router;

