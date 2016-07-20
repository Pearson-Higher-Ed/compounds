import React from 'react';

function DropdownMenuItem(props) {
  return <div {...props} className="pe-dropdown-menu__menu-item">{props.children}</div>
};

export default DropdownMenuItem;

document.body.addEventListener('o.initDropdownMenuItem', e => new DropdownMenuItem(e.detail))
