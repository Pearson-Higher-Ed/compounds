import React from 'react';

function DropdownMenuItem(props) {
  eventHarness()
  return <div {...props} className="pe-dropdown-menu__menu-item">{props.children}</div>
};

export default DropdownMenuItem;

const eventHarness = () => document.body.addEventListener('o.initDropdownMenuItem', e => new DropdownMenuItem(e.detail))
