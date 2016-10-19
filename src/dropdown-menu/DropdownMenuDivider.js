import React from 'react'
import ReactDOM from 'react-dom'

function DropdownMenuDivider(props) {
  return <div className="pe-dropdown-menu__divider" role="seperator"></div>
};

export default DropdownMenuDivider

if (typeof window !== 'undefined') {
  document.body.addEventListener('o.initDropdownMenuDivider', e => ReactDOM.render(new DropdownMenuDivider(e.detail), document.getElementById('app')))
}
