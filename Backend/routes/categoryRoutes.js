const express = require('express');
const router = express.Router();
const multer = require('multer');
//const path = require('path');
const Categories = require('../Models/Categories');

// Setup multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('jewelleryImage'), async (req, res) => {
  try {
    const category = new Categories({
      categoriesType: req.body.categoriesType,
      jewelleryId: req.body.jewelleryId,
      jewelleryName: req.body.jewelleryName,
      jewelleryPrice: req.body.jewelleryPrice,
      jewelleryImage: req.file ? req.file.path : null
    });

    await category.save();
    res.status(201).json({ message: 'Category added successfully' });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const categories = await Categories.find(); 
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
});


module.exports = router;
