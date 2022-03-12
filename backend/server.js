const dotenv = require('dotenv');
const express = require('express');

const connectDB = require('./config/db');
const colors = require('colors');

const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);

// error middleware
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Running in ${process.env.NODE_ENV} mode on Port: ${PORT}`.yellow.bold
  )
);
