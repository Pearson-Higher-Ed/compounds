import React from 'react';

function DropdownMenuDivider(props) {
  eventHarness()
  return <div className="pe-dropdown-menu__divider" role="seperator"></div>
};

export default DropdownMenuDivider;

let eventHarness = () => document.body.addEventListener('o.initDropdownMenuDivider', e => new DropdownMenuDivider(e.detail))
