import { createSelector } from 'reselect';
// import CartItem from '../../components/cart-item.component';

// the reference to state is propagated from selectCartItemsCount
const selectCart = state => state.cart;

// memoized selector
// since this selector is memoized, it would run only if it's arguments have changed
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// memoized selector, use the selector selectCartItems's value to derive the relavant data
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
