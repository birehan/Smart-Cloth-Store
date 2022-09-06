import React from 'react'
import './collection-item.style.css'
import SubmitButton from '../submit-button/submit-button.component'

import {connect} from 'react-redux'
import addToOrder from '../../redux/order/order.actions'
import { addItem } from '../../redux/cart/cart.action'


const CollectionItem = ({item, addToOrder, addItem}) => {
    return (
        <div className='collection-item'>
            <div className='image'
            style={{backgroundImage: `url(${item.imageUrl})`}}>
                <div className='add-to-cart-button'>
                <SubmitButton inverted onClick = {()=> addItem(item)}
                >ADD TO CART</SubmitButton>
                </div>
                <div className='collection-footer'>
                    <span className='name'> {item.name}</span>
                    <span className='price'> ${item.price}</span>
                </div>
            </div>
        </div>
    )  
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
    addToOrder: (item) => dispatch(addToOrder(item))
  });



export default connect(null, mapDispatchToProps)(CollectionItem);