import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Collections-Overview.scss';
import CollectionPreview from '../Preview-Collection/Preview-Collection';
import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);