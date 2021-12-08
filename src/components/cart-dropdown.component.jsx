import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from './custom-button.component';

import '../sass/app.scss';
import CartItem from './cart-item.component';
import { selectCartItems } from '../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// withRouter and connect are higher order functions, both get component as arguments AND return components so we can wrap connect with withRouter (the order matters! goes inside out and we should first connect to component before passing the props from withRouter)
// withRouter will now pass the match, history and location props to the component that being wrapped (cartDropdown). so we basically need to wrap cartDropdown with both connect and withRouter and that is the way to do so
export default withRouter(connect(mapStateToProps)(CartDropdown));
