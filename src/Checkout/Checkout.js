import React from 'react';
import PersonalDetails from './PersonalDetails';
import ShippingDetails from './ShippingDetails';
import { BsCurrencyRupee } from 'react-icons/bs'; 
import './Checkout.css';

function Checkout({ cartItems, total }) {
  return (
    <div className="checkout">
      <h2 className='haidin'>Checkout</h2>
      <div className="checkout-container">
        {/* Left Side: Personal Details and Shipping Details */}
        <div className="left-side">
          
            <PersonalDetails />
          
          <div className="shipping-details-box">
            <ShippingDetails />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="right-side">
          <div className="product-details-box">
            <h3>Product Details</h3>
            <ul className="product-list">
              {cartItems.map((item) => (
                <li key={item.id} className='product-item'>
                  <img className='product-image' src={item.img} alt={item.title} />
                  <div className='product-item-details'>
                    <h4 className='product-title'>{item.title}</h4>
                    <p>Price: {item.newPrice} INR</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: {item.newPrice * item.quantity} INR</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total">
              <p>Total Price: <BsCurrencyRupee/> {total}</p>
            </div>
            <button className='pay'>Proceed To Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
