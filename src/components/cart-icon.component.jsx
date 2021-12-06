import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../redux/cart/cart.actions';
import { selectCartItemsCount } from '../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../assests/shopping-bag.svg';

import '../sass/app.scss';
// import CartItem from './cart-item.component';

// no need to get toggleCartHidden as a prop cause it's just a function (always the same...)
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
