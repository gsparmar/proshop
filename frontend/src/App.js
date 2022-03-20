import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductEditPage from './pages/ProductEditPage';
import ProductListPage from './pages/ProductListPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/order/:id' element={<OrderPage />} />
            <Route path='/placeorder' element={<PlaceOrderPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/shipping' element={<ShippingPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart/:id' element={<CartPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/admin/userlist' element={<UserListPage />} />
            <Route path='/admin/user/:id/edit' element={<UserEditPage />} />
            <Route path='/admin/productlist' element={<ProductListPage />} />
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditPage />}
            />
            <Route path='/' element={<Home />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
