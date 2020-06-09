import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../Firebase/Firebase';

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const CollectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart())
        
        CollectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
}