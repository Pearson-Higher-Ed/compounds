import React from 'react';

function CardContent(props) {
  eventHarness()
  return <div className="pe-card__content" {...props}>{props.children}</div>
}

export default CardContent;

let eventHarness = () => document.body.addEventListener('o.initCardContent', e => new CardContent(e.detail))
