import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root', // we want to start storing data from the root
  storage,
  whitelist: ['cart'], // contains the reducers we would like to store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// we export a modified version of our root reducer and the persistConfig on top of it
export default persistReducer(persistConfig, rootReducer);
