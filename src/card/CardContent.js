import React from 'react'
import ReactDOM from 'react-dom'

function CardContent(props) {
  return <div className="pe-card__content" {...props}>{props.children}</div>
}

export default CardContent

if(typeof window !== 'undefined') {
  document.body.addEventListener('o.initCardContent', e => ReactDOM.render(new CardContent(e.detail),document.getElementById('app')))
}
