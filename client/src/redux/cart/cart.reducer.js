import cartTypes from './cart.types';
import { addItem, removeItem } from './cart.utils';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.ADD_TO_ITEM_CART:
      return { ...state, cartItems: addItem(state.cartItems, payload) };
    case cartTypes.REMOVE_TO_ITEM_CART:
      return { ...state, cartItems: removeItem(state.cartItems, payload) };

    default:
      return state;
  }
};

export default cartReducer;
