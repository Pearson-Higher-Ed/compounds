import React from 'react';

function Title(props) {
  return <div>PLACEHOLDER: Title</div>;
}

export default Title;

document.body.addEventListener('o.initTitle', e => new Title(e.detail))
