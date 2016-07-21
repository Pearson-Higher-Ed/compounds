import React    from 'react'
import ReactDOM from 'react-dom'

function CardHeader(props) {
  return <div className="pe-card__header">{props.children}</div>
}

export default CardHeader;

document.body.addEventListener('o.initCardHeader', e => ReactDOM.render(new CardHeader(e.detail),document.getElementById('app')))
