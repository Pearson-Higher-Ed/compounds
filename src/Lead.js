import React from 'react';



function Lead(props) {
  eventHarness()
  return <div>PLACEHOLDER: Lead</div>
}

export default Lead;

let eventHarness = () => document.body.addEventListener('o.initLead', e => new Lead(e.detail))
