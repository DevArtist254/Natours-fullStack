import { combineReducers } from 'redux';
import tourReducer from './tour/tour.reducer';
import toursReducer from './tours/tours.reducer';
import authReducer from './auth/auth.reducer';
import userReducer from './users/users.reducer';
import searchReducer from './search/search.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  whitelist: ['auth', 'tours', 'tour', 'cart'],
};

const rootReducer = combineReducers({
  tours: toursReducer,
  tour: tourReducer,
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;
