import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../Redux/shop/shop.selector';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './Collections-Overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps), WithSpinner
)(CollectionsOverview)

// Same thing as the top, but just easier to read
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionsOverviewContainer;