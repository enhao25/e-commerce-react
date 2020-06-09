import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../Redux/shop/shop.selector';
import { connect } from 'react-redux';

import CollectionsOverview from '../../Component/Collections-Overview/Collections-Overview';
import Collection from '../Collection/Collection';

import { fetchCollectionStartAsync } from '../../Redux/shop/shop.actions'

// import { updateCollections } from '../../Redux/shop/shop.actions';
import WithSpinner from '../../Component/WithSpinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)

class ShopPage extends React.Component{
    
    // state = {
    //     loading: true
    // }

    // unsubsribleFromSnapShot = null;

    // componentDidMount() {
    //     const { updateCollections } = this.props;

        // To send us the snapshot of the collections array in firebase
        // this.unsubsribleFromSnapShot = CollectionRef.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionSnapshotToMap(snapshot);
        //     updateCollections(collectionMap);
        //     this.setState({ loading: false });
        // })

        // Using promises 2
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-796e9/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections))

    // }

    // componentWillUnmount() {
    //     this.unsubsribleFromSnapShot();
    // }

    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        console.log("runned")
        fetchCollectionStartAsync();
    }



    render() {
        const { match, isCollectionLoaded } = this.props;
        // const { loading } = this.state;
        return (
            <div className="shop-page">
                {/* This is the code before we introduced the spinner */}
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} /> */}
                <Route exact path={`${match.path}`} render={(props) => 
                    <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => 
                    <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
            </div>
        )
    }
} 

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);