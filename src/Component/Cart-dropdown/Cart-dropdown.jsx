import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../Cart-Item/Cart-Item';
import { selectCartItems } from '../../Redux/cart/cart.selector';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
}) 

export default connect(mapStateToProps)(CartDropdown);