import React from 'react';
import PropTypes from 'prop-types';

const DropdownItem = ({ label, divider }) => {
  if (divider) {
    return (
      <li className="divider-container" role="separator" data-item="divider">
        <hr className="dropdown-divider" />
      </li>
    );
  }

  return (
    <li role="presentation" data-item={label}>
      {label}
    </li>
  );
};

DropdownItem.propTypes = {
  label: PropTypes.string,
  divider: PropTypes.bool
};

export default DropdownItem;
