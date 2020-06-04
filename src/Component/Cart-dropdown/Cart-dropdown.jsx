import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './Cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../Cart-Item/Cart-Item';
import { selectCartItems } from '../../Redux/cart/cart.selector';
import { toggleCartHidden } from "../../Redux/cart/cart.actions"

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=> {
            dispatch(toggleCartHidden());
            history.push('/checkout')
        }}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
}) 

export default withRouter(connect(mapStateToProps)(CartDropdown));