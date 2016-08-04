import React from 'react'
import ReactDOM from 'react-dom'

function DropdownMenuItem(props) {
  return <div {...props} className="pe-dropdown-menu__menu-item">{props.children}</div>
};

export default DropdownMenuItem;

if(typeof window !== 'undefined') {
  document.body.addEventListener('o.initDropdownMenuItem', e => ReactDOM.render(new DropdownMenuItem(e.detail),document.getElementById('app')))
}
