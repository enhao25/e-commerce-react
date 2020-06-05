import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

// createSelector is a curry function that is a function that returns a function
export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections =>
        collections[collectionUrlParam]
)