import React from 'react';

// jsdom for eventharness**
import jsdom from 'jsdom';
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initDropdownMenuItem', e => new DropdownMenuItem(e.detail))
// *************************

function DropdownMenuItem(props) {
  return <div {...props} className='pe-dropdown-menu__menu-item'>{props.children}</div>
};

export default DropdownMenuItem;
