import React from 'react';

import CustomButton from './custom-button.component';

import '../sass/app.scss';

const CartDropdown = () => (
  <div className="cart-dropdown hidden">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
