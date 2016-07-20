import React from 'react';

function CardContent(props) {
  return <div className="pe-card__content" {...props}>{props.children}</div>
}

export default CardContent;

document.body.addEventListener('o.initCardContent', e => new CardContent(e.detail))
