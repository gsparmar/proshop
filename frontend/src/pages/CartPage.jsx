import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  ListGroup,
  Card,
  Image,
  Form,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const productId = params.id;
  // pulling qty from url
  const qty = new URLSearchParams(location.search).get('qty');
  console.log(qty);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>cart</h1>
    </div>
  );
};

export default CartPage;
