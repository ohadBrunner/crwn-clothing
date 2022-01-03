import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    // similar to async/await, we get the value back into our constant instead of chaining the resulved value
    const snapshot = yield collectionRef.get();
    // call is a blocking effect creator This means that the saga will not continue to run to the next yield until the API call finishes.
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //Once call is finished, we yield put . put is dispatching a new action with the result from the previous yield. put is non- blocking.
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
