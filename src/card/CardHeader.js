import React from 'react';

() => document.body.addEventListener('o.initCardHeader', e => new CardHeader(e.detail))


function CardHeader(props) {
  return <div className="pe-card__header">{props.children}</div>
}

export default CardHeader;
