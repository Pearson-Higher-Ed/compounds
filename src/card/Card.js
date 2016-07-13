import React from 'react';

// jsdom for eventharness**
import jsdom from 'jsdom';
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initCard', e => new Card(e.detail))
// *************************

function Card(props) {
  return (
    <div className='pe-card'>{props.children}</div>
  );
}

export default Card;
