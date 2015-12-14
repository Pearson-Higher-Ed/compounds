import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import normalizeUrlPathPart from '../utilities/normalizeUrlPathPart';

function renderItems(items, path = ['']) {
  if (!items) {
    return;
  }

  return (
    <ul>
      {items.map(navItem => {
        const { title, items } = navItem;
        const navItemPath = path.concat([normalizeUrlPathPart(title)]);

        return (
          <li key={title}>
            <Link to={navItemPath.join('/')}>{title}</Link>
            {items ? renderItems(items, navItemPath) : ''}
          </li>
        );
      })}
    </ul>
  );
}

function Nav(props) {
  return (
    <nav>{renderItems(props.data)}</nav>
  );
}

Nav.propTypes = {
  data: PropTypes.array.isRequired
};

export default Nav;
