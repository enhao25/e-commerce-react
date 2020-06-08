import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../Component/Collections-Overview/Collections-Overview';
import Collection from '../Collection/Collection';

import { firestore, convertCollectionSnapshotToMap } from '../../Firebase/Firebase';
import { updateCollections } from '../../Redux/shop/shop.actions';
import WithSpinner from '../../Component/WithSpinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)

class ShopPage extends React.Component{
    
    state = {
        loading: true
    }

    unsubsribleFromSnapShot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const CollectionRef = firestore.collection('collections');

        // To send us the snapshot of the collections array in firebase
        this.unsubsribleFromSnapShot = CollectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        })
    }

    componentWillUnmount() {
        this.unsubsribleFromSnapShot();
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                {/* This is the code before we introduced the spinner */}
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} /> */}
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);