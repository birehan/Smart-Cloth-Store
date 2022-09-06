import React from "react";
import './cart.style.css';

import SubmitButton from '../submit-button/submit-button.component'
import CartItem from "../cart-item/cart-item.component";
import {connect} from 'react-redux';

import { selectCartItems } from "../../redux/cart/cart.selector";

import {useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropDown = ({cartItems, toggleCartHidden}) => {
    const navigate = useNavigate();
   
    return ( <div className="cart-dropdown">
    <div className="cart-items">
        {
            (cartItems.length == 0)? 
            <span className="empty-message">Your cart is empty</span>:
            cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)
        }
    </div>
    <SubmitButton onClick={()=> {
        toggleCartHidden();
        navigate('/checkout')
    }}
    >GO TO CHECKOUT</SubmitButton>
</div>)
}

const mapStateToProps = (state) =>( {
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



export default (connect(mapStateToProps, mapDispatchToProps)(CartDropDown));