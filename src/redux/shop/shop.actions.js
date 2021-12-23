import ShopActionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collectionsMap,
});

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from '../../firebase/firebase.utils';

// export const fetchCollectionStart = () => ({
//   type: ShopActionTypes.FETCH_COLLECTIONS_START,
// });

// export const fetchCollectionsSuccess = collectionsMap => ({
//   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
//   payload: collectionsMap,
// });

// export const fetchCollectionsFailure = errorMessage => ({
//   type: ShopActionTypes.fetchCollectionsFailure,
//   payload: errorMessage,
// });

// // the function that we will pass to our component to begin the fetching process
// export const fetchCollectionStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionStart());

//     collectionRef
//       .get()
//       .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch(error => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
