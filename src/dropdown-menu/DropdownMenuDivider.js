import React from 'react';

function DropdownMenuDivider(props) {
  return <div className="pe-dropdown-menu__divider" role="seperator"></div>
};

export default DropdownMenuDivider;

document.body.addEventListener('o.initDropdownMenuDivider', e => new DropdownMenuDivider(e.detail))
