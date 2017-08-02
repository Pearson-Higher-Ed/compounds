import React from 'react';
import PropTypes from 'prop-types';

const DropdownItem = ({ url, label, type }) => {
  switch (type) {
    case 'divider':
      return (
        <li className="divider-container" role="separator" data-item="divider">
          <hr className="dropdown-divider" />
        </li>
      );
      break;
    case 'link':
      return (
        <li role="presentation" data-item={label}>
          <a href={url} role="menuitem" tabIndex="-1" data-item={label}>{label}</a>
        </li>
      );
      break;
    case 'button':
      return (
        <li role="presentation" data-item={label}>
          <button role="menuitem" tabIndex="-1" data-item={label}>{label}</button>
        </li>
      );
      break;
    default:
      break;
  }
};

DropdownItem.propTypes = {
  label: PropTypes.string,
  divider: PropTypes.bool
};

export default DropdownItem;
