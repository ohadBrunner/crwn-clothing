export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // if the item the user is trying to add already exists in the cart we want to increase the quantity of that item
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? // spreading all the properties and keep them as they are and just modifying the quantity
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // in case it is the first item of it's kind. we initiate the quantity to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
