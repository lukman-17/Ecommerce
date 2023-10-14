import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { BsCurrencyRupee } from 'react-icons/bs'; 
import Checkout from '../Checkout/Checkout';
function Cart({ cartItems, removeFromCart, updateQuantity, total }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className='cart-item'>
            <img className='image' src={item.img} alt={item.title} />
            <div className='item-details'>
              <h3 className='item-name'>{item.title}</h3>
              <p>Price: {item.newPrice} INR</p>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>   {item.quantity }</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p>Total: <BsCurrencyRupee/>{item.newPrice * item.quantity} </p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <p>Total Price: <BsCurrencyRupee/>{total} </p>
        <Link to="/checkout"> 
          <button className='checkout-btn'>Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;