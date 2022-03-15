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
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart/:id' element={<CartPage />} />
            <Route path='/cart/' element={<CartPage />} />
            <Route path='/' element={<Home />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
