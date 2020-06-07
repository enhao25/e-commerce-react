import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../Component/Collections-Overview/Collections-Overview';
import Collection from '../Collection/Collection';

import { firestore, convertCollectionSnapshotToMap } from '../../Firebase/Firebase';
import { updateCollections } from '../../Redux/shop/shop.actions';

class ShopPage extends React.Component{

    unsubsribleFromSnapShot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const CollectionRef = firestore.collection('collections');

        // To send us the snapshot of the collections array in firebase
        this.unsubsribleFromSnapShot = CollectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionMap);
        })


    }

    componentWillUnmount() {
        this.unsubsribleFromSnapShot();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);