import React from 'react';

function DropdownItem(props) {
  return <div {...props} className="pe-dropdown-menu__menu-item">{props.children}</div>
};

export default DropdownMenuItem;
