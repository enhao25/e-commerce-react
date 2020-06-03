import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../Redux/cart/cart.actions'

import './Collection-item.scss'
import CustomButton from '../CustomButton/CustomButton';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className='name'>{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted> Add To Cart </CustomButton>
        </div>
)}

// Dispatch = Putting payload into the store / Updating the state value
// Dispatch allow us to use the addItem function in cart.actions
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);