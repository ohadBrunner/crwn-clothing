import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item.component';

import '../../sass/app.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
// own props -> match,history,location...
const mapStateToProps = (state, ownProps) => ({
  // we are giving the state to the function selectCollection returns!
  // this is necessary bacause unlike other selectors, this selector needs a part of the state depending on the URL parameter. selectCollection returns createSelector...
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
