import React from 'react';

function Card(props) {
  eventHarness()
  return (
    <div className="pe-card">{props.children}</div>
  );
}

export default Card;

let eventHarness = () => document.body.addEventListener('o.initCard', e => new Card(e.detail))
