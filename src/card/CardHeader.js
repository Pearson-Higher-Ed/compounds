import React from 'react';

// jsdom for eventharness**
import jsdom from 'jsdom';
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initCardHeader', e => new CardHeader(e.detail))
// *************************

function CardHeader(props) {
  return <div className='pe-card__header'>{props.children}</div>
}

export default CardHeader;
