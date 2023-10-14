import './Products.css';
import React from 'react';
function Products({result}){

    return (
    <>
        <section className='card-container'>
        
        {result}

         </section>
    </>
    )
}
export default Products;