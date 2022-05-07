import cartTypes from './cart.types';

export const addItemsToCart = (item) => ({
  type: cartTypes.ADD_TO_ITEM_CART,
  payload: item,
});
