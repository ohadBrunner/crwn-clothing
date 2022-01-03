import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

// // withRouter and connect are higher order functions, both get component as arguments AND return components so we can wrap connect with withRouter (the order matters! goes inside out and we should first connect to component before passing the props from withRouter)
// // withRouter will now pass the match, history and location props to the component that being wrapped (cartDropdown). so we basically need to wrap cartDropdown with both connect and withRouter and that is the way to do so
// export default withRouter(connect(mapStateToProps)(CartDropdown));

export default CartDropdown;
