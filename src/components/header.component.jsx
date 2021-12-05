import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../firebase/firebase.utils';
import CartIcon from './cart-icon.component';
import CartDropdown from './cart-dropdown.component';

import { ReactComponent as Logo } from '../assests/crown.svg'; // special syntax for importing SVG in React

import '../sass/app.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        //checking wheter there is a user signed in
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// state is the root-reducer. mapStateToProps gives back an object which merges into the Header's props
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

// connect wrapps the Header component which is now susbscribed to updaates from the redux store
export default connect(mapStateToProps)(Header);
