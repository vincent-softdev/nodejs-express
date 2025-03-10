// import express
const express = require('express');
// import controller
const {productController, getFakeProductsController} = require('../controllers/productController');

// create router
const router = express.Router();

// define routes
router.get('/products', productController);

// fake api route
router.get('/fake-api/products', getFakeProductsController);

module.exports = router;
