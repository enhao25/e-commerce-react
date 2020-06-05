import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../Redux/shop/shop.selector';

import './Collection.scss'
import CollectionItem from '../../Component/Collection-item/Collection-item';

const Collection = ({ collection }) => {
    const { title, items } = collection;
    return (
    <div className="collection-page">
        <h2 className='title'>{ title }</h2>
        <div className="items">
            {
                items.map(item=> <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)}

// ownProps gives us access the the props in our Collection component. Hence we can 
// use it to get the match props
const mapStateToProps = (state, ownProps) => ({
    // This is because selectCollection(ownProps.match.params.collectionId) returns a function
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);