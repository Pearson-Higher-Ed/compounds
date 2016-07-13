import React from 'react';

// jsdom for eventharness**
import jsdom from 'jsdom';
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initLead', e => new Lead(e.detail))
// *************************

function Lead(props) {
  return <div>PLACEHOLDER: Lead</div>
}

export default Lead;
