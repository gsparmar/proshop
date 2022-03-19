const AsyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

// @ desc Create new order
// @ route POST /api/orders
// @ access Private
const addOrderItems = AsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('no order items');
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @ desc Get order id
// @ route GET /api/orders/:id
// @ access Private
const getOrderById = AsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @ desc UPDATE order to paid
// @ route put /api/orders/:id/pay
// @ access Private
const updateOrderToPaid = AsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    // set order to true
    order.isPaid = true;
    order.paidAt = Date.now();
    // coming from paypal
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @ desc GET  logged in users order
// @ route put /api/orders/myorders
// @ access Private
const getMyOrders = AsyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

module.exports = {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
};
