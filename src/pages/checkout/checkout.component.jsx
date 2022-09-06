import React from "react";
import './checkout.style.css'
import CheckoutItem from "../../component/checkout-item/chechout-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>

        <div className="checkout-header">

            <div className="header-block">
                <span>Product</span>
            </div>

            <div className="header-block">
                <span>Description</span>
            </div>

            <div className="header-block">
                <span>Quantity</span>
            </div>

            <div className="header-block">
                <span>Price</span>
            </div>

            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
            
               {
               cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem ={cartItem} />)
               }
            

            <div className="total">TOTAL: ${total}</div>

    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage);

