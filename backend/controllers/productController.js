const AsyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @ desc Fetch all products
// @ route GET /api/products
// @ access Public Route
const getProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @ desc Fetch single product
// @ route GET /api/products/:id
// @ access Public Route

const getProductById = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @ desc delete product
// @ route DELETE /api/products/:id
// @ access Public ADMIN

const deleteProduct = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
};
