import {AiFillStar} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs';
import React from 'react';
import {FiHeart} from 'react-icons/fi';
import { BsCurrencyRupee } from 'react-icons/bs'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import App from '../App';
function Card({ img, title, star, reviews, prevPrice, newPrice ,id,addToCart,addToWishlist,SingleProductPage,setShowCart, setShowWishlist}){
    
  const handleAddToCart = () => {
    const data = {
      img,
      title,
      star,
      reviews,
      prevPrice,
      newPrice,
      id,
    };
    addToCart(data); 
       setShowCart(true); 
    // window.alert("Product added to cart");
  };
  const handleAddToWishlist = () => {
    const data = {
      img,
      title,
      star,
      reviews,
      prevPrice,
      newPrice,
      id,
    };
    addToWishlist(data); // Call the addToWishlist function with the product
    setShowWishlist(true)
   // window.alert("Product added to wishlist");
  };
  const openSingleProductPage = () => {
    // Construct the URL for the SingleProductPage using the product ID
    const singleProductPageUrl = `/product/${id}`;

    // Open the SingleProductPage in a new window
    window.open(singleProductPageUrl, '_blank');
  };
    return(     
  
        <div className='card' >
        <img src={img} alt={title}
            className='card-image'
            />
        
           <div className='card-details'>
            <Link to={`/product/${id}`} target="_blank">
            <div onClick={openSingleProductPage}>
             <h3 className='card-title'> {title}</h3>
             <section className='card-reviews'>
            <AiFillStar className='ratings-star'/> 
            <AiFillStar className='ratings-star' />
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/> 
             <span className='total-reviews'>{reviews}</span> 
             </section>
             <section className='card-price'>
                <div className='price'>
                  <h4> <BsCurrencyRupee/> <del>{prevPrice}</del> {newPrice} </h4> 
                </div> <p>25% off</p>
                <div className='bag'>
                <BsFillBagCheckFill/>
                </div>
               </section>
               </div>
            </Link> 
             <div className='assr'>
             
              <button onClick={handleAddToCart}>Add</button>
              <div className='wish'>
               <a onClick={handleAddToWishlist}><FiHeart/></a>
               </div> 
              </div>
           </div>
           </div>
    );     
}
export default Card;
