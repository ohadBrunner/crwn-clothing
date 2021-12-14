import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

// finding the right collection from the shop based on our COLLECTION_ID_MAP
// due to the collectionUrlParam being passed in from our collection component's mapStateToProps, this function is not memoize and we have to memoize the whole function using a memoize helper function.
export const selectCollection = memoize(collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
);
