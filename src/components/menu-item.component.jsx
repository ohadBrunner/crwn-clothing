import React from 'react';
import { withRouter } from 'react-router-dom';
import '../sass/app.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size ? size + ' menu-item' : 'menu-item'}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)} // this way we alter the url so the router could take us to the right place
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// withRouter enable this component to have props like history & match even though there is no router wrapping it (it gets these props from the App component)
export default withRouter(MenuItem);
