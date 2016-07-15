import React from 'react';

function CardHeader(props) {
  eventHarness()
  return <div className="pe-card__header">{props.children}</div>
}

export default CardHeader;

const eventHarness = () => document.body.addEventListener('o.initCardHeader', e => new CardHeader(e.detail))
