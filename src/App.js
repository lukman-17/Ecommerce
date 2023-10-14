import {useState} from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import{AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import products from './db/Data';
import Card from "./components/Card";
import Nav from "./Navigation/Nav";
import Cart from "./Cart/Cart";
import './index.css'
import{AiOutlineUserAdd} from 'react-icons/ai';
import React from "react";
import {FiHeart} from 'react-icons/fi';
import Price from "./Sidebar/Price/Price";
import Wishlist from "./Wishlist";
import { AiFillCloseCircle } from "react-icons/ai";
import SingleProductPage from "./SingleProductpage/SingleProductPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from "./Checkout/Checkout";

function App(){
  
   const [selectedCategory,setselectedCategory]=useState(null);
  
   //------inputfilter-------
   const [query, setQuery] = useState("")
   const handleInputChange = (event) => {
        setQuery(event.target.value);
   };
   const filteredItems=products.filter(product=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!==-1)
   );
   //------radio filter-------
   const handleChange= (event) =>  {
    setselectedCategory(event.target.value);
   };
   
//-----buttonfilter------
   const handleClick= (event) => {
    setselectedCategory(event.target.value);
   };
 
   const [wishlistItems, setWishlistItems] = useState([]);

   // Function to add an item to the wishlist
   const addToWishlist = (product) => {
     setWishlistItems([...wishlistItems, product]);
   };
 
   // Function to remove an item from the wishlist
   const removeFromWishlist = (productId) => {
     const updatedWishlist = wishlistItems.filter((item) => item.id !== productId);
     setWishlistItems(updatedWishlist);
   };

   const [showWishlist, setShowWishlist] = useState(false);

const toggleWishlist = () => {
  setShowWishlist(!showWishlist);
};
  
      
       function filteredData(products,selected,query){

        let filteredProducts=products;
        // filtering input items
        if(query){
          filteredProducts=filteredItems
        }
         // selected filter 
         if (selected) {
          
          filteredProducts = filteredProducts.filter(
            ({ category, color, company, newPrice, title,id }) =>
              category === selected ||
              color === selected ||
              company === selected ||
              newPrice === selected ||
              title === selected ||
              id===selected
          );
        }
        return filteredProducts.map(
          ({ img, title, star, reviews, prevPrice, newPrice,id }) => (
            <Card
              key={Math.random()}
              img={img}
              title={title}
              star={star}
              reviews={reviews}
              prevPrice={prevPrice}
              newPrice={newPrice}
              id={id}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              setShowCart={setShowCart}
              setShowWishlist={ setShowWishlist}
              Checkout={Checkout}
            />
          )
        );

          }
           // Function to update the quantity of a product in the cart

          const [cartItems, setCartItems] = useState([]);
        
         
          const [showCart, setShowCart] = useState(false);
          // remove product from cart
          const removeFromCart = (productId) => {
            const updatedCart = cartItems.filter((item) => item.id !== productId);
            setCartItems(updatedCart);
          };

          // Function to toggle the cart's visibility
          const toggleCart = () => {
            setShowCart(!showCart);
            };

            const addToCart = (product) => {
              const updatedProduct = { ...product, quantity: 1 }; 
              setCartItems([...cartItems, product]);
            };
            const updateQuantity = (productId, newQuantity) => {
              const updatedCart = cartItems.map((item) => {
                if (item.id === productId) {
                  // Check for undefined and make sure newQuantity is never less than 0
               
                  const quantity = typeof newQuantity === 'number' && newQuantity >= 0 ? newQuantity : 0;
                  return { ...item, quantity };
                }
                return item;
              });
              setCartItems(updatedCart);
            };
            

  // Calculate the total price
  const total = cartItems.reduce((acc, item) => {
    return acc + item.newPrice * item.quantity;
  }, 0);

  //wishlist 

        
            const result=filteredData(products,selectedCategory,query)
            
     return (
      <>
      <Router>
       <Switch>
          <Route path="/product/:id">
          <SingleProductPage products={products} />
          </Route>
          <Route path="/checkout">
  <Checkout cartItems={cartItems} total={total} />
</Route>

          <Route path="/">
           
       
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      
      <Products result={result}  addToCart={addToCart} />
       {/* Add a button to toggle the cart */}
       <a className="cart-toggle-button" onClick={toggleCart}>
        {showCart ? <AiFillCloseCircle/> : <AiOutlineShoppingCart/>}
      </a>
      {/* Render the Cart component */}
      {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart}  updateQuantity={updateQuantity} total={total}  setShowCart={setShowCart}/>}
    
      <a className="wishlist-toggle-button" onClick={toggleWishlist}> <FiHeart/>
      {showWishlist &&  (
        <Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist}  setShowWishlist={ setShowWishlist}/>
       ) }
      </a>
      </Route>
      </Switch>
      </Router>
    </>
  );
     }
export default App;