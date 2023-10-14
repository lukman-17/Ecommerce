import React from 'react';
import { useParams } from 'react-router-dom';
import { BsCurrencyRupee } from 'react-icons/bs';
import './SingleProductPage.css';

function SingleProductPage({ products }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <div className="single-product-not-found">Product not found</div>;
  }

  return (
    <div className="single-product-container">
      <div className="sub-images">
        <img src={product.img} alt={product.title} />
        <img src={product.img} alt={product.title} />
        <img src={product.img} alt={product.title} />
      </div>
      <div className="single-product-main">
      
          <div className="single-product-image">
            <img src={product.img} alt={product.title} />
          </div>
       
       
      </div>
      <div className="reviews-container">
          <h3>Customer Reviews</h3>
          <div className="review">
            <li>
                <p className="review-author">Lukman Qureshi</p>
                <p className="review-rating">Rating : 4</p>
                <p className="review-text">
                  superb shoes love this, classy look
                </p>
              </li>
              <li>
                <p className="review-author">Aditya Singh</p>
                <p className="review-rating">Rating : 3</p>
                <p className="review-text">
                  very bad product dont buy this, not satisfied from this.
                </p>
              </li>
           </div>
        </div>
      <div className="single-product-details">
        <h2>{product.title}</h2>
        <div className="price-container">
          <h6>
            Price: <BsCurrencyRupee />
            {product.newPrice}
          </h6>
        </div>
        <p>Rating: {product.star} stars</p>
        <p>Reviews: {product.reviews}</p>
        <p>This is a very nice pair of shoes. It's comfortable and stylish.</p>
        <p>This is a very nice pair of shoes. It's comfortable and stylish.</p>
        <p>This is a very nice pair of shoes. It's comfortable and stylish.</p>
        <div className="button-container">
          <button className="buy-button">Buy Now</button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
