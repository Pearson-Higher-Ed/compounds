import React from 'react';

document.body.addEventListener('o.initCard', e => new Card(e.detail))

function Card(props) {
  return (
    <div className="pe-card">{props.children}</div>
  );
}

export default Card;
