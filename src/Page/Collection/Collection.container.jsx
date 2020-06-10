import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../Redux/shop/shop.selector';
import WithSpinner from '../../Component/WithSpinner/WithSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionsPageContainer = compose(
    connect(mapStateToProps), WithSpinner
)(Collection)

export default CollectionsPageContainer;