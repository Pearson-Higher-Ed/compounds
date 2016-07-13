import React from 'react';

() => document.body.addEventListener('o.initDropdownMenuDivider', e => new DropdownMenuDivider(e.detail))

function DropdownMenuDivider(props) {
  return <div className="pe-dropdown-menu__divider" role="seperator"></div>
};

export default DropdownMenuDivider;
