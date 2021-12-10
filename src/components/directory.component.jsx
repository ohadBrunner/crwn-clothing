import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../redux/directory/directory.selectors';

import MenuItem from './menu-item.component';

import '../sass/app.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} /> // spreading all the other props as they keep the same name (other than key/id)
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
