import React from 'react';

// jsdom for eventharness**
import jsdom from 'jsdom';
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initDropdownMenuDivider', e => new DropdownMenuDivider(e.detail))
// *************************

function DropdownMenuDivider(props) {
  return <div className="pe-dropdown-menu__divider" role="seperator"></div>
};

export default DropdownMenuDivider;
