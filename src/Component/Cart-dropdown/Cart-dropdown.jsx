import React from 'react';

import './Cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;