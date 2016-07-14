import React from 'react';

function Title(props) {
  eventHarness()
  return <div>PLACEHOLDER: Title</div>;
}

export default Title;

let eventHarness = () => document.body.addEventListener('o.initTitle', e => new Title(e.detail))
