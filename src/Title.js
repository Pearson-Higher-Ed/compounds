import React from 'react';

// jsdom for eventharness**
import jsdom from 'jsdom';
const exposedProperties = ['window', 'document'];
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initTitle', e => new Title(e.detail))
// *************************

function Title(props) {
  return <div>PLACEHOLDER: Title</div>;
}

export default Title;
