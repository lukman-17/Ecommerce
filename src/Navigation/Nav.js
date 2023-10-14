import {FiHeart} from 'react-icons/fi';
import{AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';
import './Nav.css';
import App from '../App';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist';

function Nav(){

    return (
     
   <nav>
   
    <div className='nav-container'>
    <input
     type='text'
     className='search-input'
     placeholder='Enter your shoes.'    
/>
    </div>
    
    <div className='profile-container'>
       
        
       
    </div>
   </nav>
    );
}export default Nav;