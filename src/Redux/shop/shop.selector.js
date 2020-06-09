import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

// Object.keys return an array of keys in the object that was passed in 
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections 
        ? Object.keys(collections).map(key => collections[key])
        : []
)

// createSelector is a curry function that is a function that returns a function
export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections 
        ? collections[collectionUrlParam]
        : null
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)