import React from 'react';
import './Wishlist.css';

function Wishlist({ wishlistItems, removeFromWishlist }) {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id} className='wishlist-item'>
            <img className='image' src={item.img} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>Price: {item.newPrice} INR</p>
              
              <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist