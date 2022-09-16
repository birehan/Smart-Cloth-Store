import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LieKCDy39AmJAKBDWQwdKYWilddyMkIdeJGtgYNitmvQ80MhaussDOEDegt2eJgRABaIeUyaKJ7j53W0bHVIU5Q00xXCAIWOJ';
    
    const onToken = token => {
        console.log('token:', token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name= 'Smart Cloth Store'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description= {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel= 'Pay Now'
        token={onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton