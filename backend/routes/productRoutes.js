const express = require('express');
const AsyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require('../models/productModel');

// @ desc Fetch all products
// @ route GET /api/products
// @ access Public Route
router.get(
  '/',
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
// @ desc Fetch single product
// @ route GET /api/products/:id
// @ access Public Route
router.get(
  '/:id',
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

module.exports = router;
