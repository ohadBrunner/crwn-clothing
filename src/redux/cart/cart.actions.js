import CartActionsType from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionsType.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: CartActionsType.ADD_ITEMS, // WHAT to do
  payload: item, // with WHO to do
});
