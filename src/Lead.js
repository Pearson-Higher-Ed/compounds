import React from 'react'
import ReactDOM from 'react-dom'


function Lead(props) {
  return <div>PLACEHOLDER: Lead</div>
}

export default Lead

document.body.addEventListener('o.initLead', e => ReactDOM.render(new Lead(e.detail),document.getElementById('app')))
