import React from 'react';

function Card(props) {
  return (
    <div className="pe-card">{props.children}</div>
  );
}

export default Card;

document.body.addEventListener('o.initCard', e => new Card(e.detail))
