import React from 'react';
import { connect } from 'react-redux';

import CustomButton from './custom-button.component';
import { addItem } from '../redux/cart/cart.actions';

import '../sass/app.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item; // this way I now have access to both the properties of the item AND the item itself
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
