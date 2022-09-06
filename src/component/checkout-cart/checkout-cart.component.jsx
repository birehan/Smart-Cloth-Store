import './checkout-cart.style.css'
import React from 'react';

const CheckoutCart = ({cart}) => {
    return (
        <div className='checkoutCart'>
            <img className='img' src={cart.imageUrl}/>
           <div className='checkout'>
           <span>{cart.name}</span>
            <span>{cart.quantity}</span>
            <span>${cart.price}</span>
            <span>x</span>
           </div>
        </div>
    );
}

export default CheckoutCart;