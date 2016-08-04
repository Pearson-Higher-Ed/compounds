import React    from 'react'
import ReactDOM from 'react-dom'

function Card(props) {
  return (
    <div className="pe-card">{props.children}</div>
  );
}

export default Card

if (typeof window !== 'undefined') {
  document.body.addEventListener('o.initCard', e => ReactDOM.render(new Card(e.detail), document.getElementById('app')))
}
