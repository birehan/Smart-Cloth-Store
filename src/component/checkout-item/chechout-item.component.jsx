import './checkout-item.style.css'
import React from 'react'
import { connect} from 'react-redux'

import { removeItem, decreseItemQuantity, addItem} from '../../redux/cart/cart.action'

const CheckoutItem = ({cartItem, removeItem, decreseItemQuantity, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (<div className='checkout-item'>

        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>

        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='decrease-quantity' onClick={()=>decreseItemQuantity(cartItem)} >&#10094;</div>
             <span className='value'>{quantity} </span>
            <div className='increase-quantity' onClick={()=>addItem(cartItem)} >&#10095;</div>

            </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>removeItem(cartItem)}>&#10005;</div>
        
    </div>)
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (item)=> dispatch(removeItem(item)),
    addItem: (item)=> dispatch(addItem(item)),
    decreseItemQuantity: (item)=> dispatch(decreseItemQuantity(item))

})
export default connect(null, mapDispatchToProps)(CheckoutItem)