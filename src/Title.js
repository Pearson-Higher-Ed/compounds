import React from 'react';
import ReactDOM from 'react-dom'

function Title(props) {
  return <div>PLACEHOLDER: Title</div>;
}

export default Title;

document.body.addEventListener('o.initTitle', e => ReactDOM.render(new Title(e.detail),document.getElementById('app')))
