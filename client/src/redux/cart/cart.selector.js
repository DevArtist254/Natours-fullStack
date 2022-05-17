import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (accumlatedQunatity, cartItem) => accumlatedQunatity + cartItem.quantity,
      0
    )
);

export const selectCartItemSum = createSelector([selectCartItem], (cartItems) =>
  cartItems.reduce(
    (accumlatedQunatity, cartItem) =>
      accumlatedQunatity + cartItem.quantity * cartItem.price,
    0
  )
);
