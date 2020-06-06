import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51GqtMVCksbI3Qu77xzuF30tOH391wE0Yb9fmO1jAvhBzGU4ugF2T1xaPa9etI2upkgKLFOHg8KcI6jtgiIDzu1qL00jJsRIO91";

    const onToken = token => {
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
            label = "Pay Now"
            name = "Ecommerce Project Pte Ltd"
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel="Pay Now"
            token = {onToken}
            stripeKey={publishablekey}
            currency="SGD"
        />
    )
}

export default StripeCheckoutButton;