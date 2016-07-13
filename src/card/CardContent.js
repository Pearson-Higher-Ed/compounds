import React from 'react';

// jsdom for eventharness**
import jsdom from 'jsdom';
const exposedProperties = ['window', 'document'];
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initCardContent', e => new CardContent(e.detail))
// *************************

function CardContent(props) {
  return <div className="pe-card__content" {...props}>{props.children}</div>
}

export default CardContent;
