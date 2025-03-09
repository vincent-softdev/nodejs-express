// import express
const express = require('express');
// import controller
const productController = require('../controllers/productController');

// create router
const router = express.Router();

// define routes
router.get('/products', productController);

module.exports = router;
