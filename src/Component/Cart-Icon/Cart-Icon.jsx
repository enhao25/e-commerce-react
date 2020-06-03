import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from "../../Redux/cart/cart.actions"

import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

import './Cart-Icon.scss';
import { selectCartItemsCount } from '../../Redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className='item-count'>{ itemCount }</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);