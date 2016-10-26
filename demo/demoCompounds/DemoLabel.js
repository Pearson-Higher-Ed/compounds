import React     from 'react';
import { Label } from '../../Compounds';


export const DemoLabel = (props) => {
  return(
    <div className="displaySection">
      <h1 className="displayTitle"><a className="displayTitleLink" href="https://pearson-higher-ed.github.io/design/c/inputs/#labels">Label</a></h1>
      <div className="elementDescription">
        <iframe src="https://pearson-higher-ed.github.io/design/c/inputs/#labels" style={{width:'100%', height:'100%'}}/>
      </div>
      <div className="elementContainer">
        <Label>This is the default label.</Label>
        <p className="code">{"<Label>This is the default label.</Label>"}</p>
        <Label type="secondary">This is a secondary label.</Label>
        <p className="code">{"<Label type='secondary'>This is a secondary label.</Label>"}</p>
        <Label size="small">This is a small label.</Label>
        <p className="code">{"<Label size='small'>This is a small label.</Label>"}</p>
        <Label size="large">This is a large label.</Label>
        <p className="code">{"<Label size='large'>This is a large label.</Label>"}</p>
        <Label inverse style={{ backgroundColor: '#000' }}>This is an inverse label.</Label>
        <p className="code">{"<Label inverse style={{ backgroundColor: '#000' }}>This is an inverse label.</Label>"}</p>
        <Label><h4>A label may include a single child element, which will be used as the root element.</h4></Label>
        <p className="code">{"<Label><h4>A label may include a single child element, which will be used as the root element.</h4></Label>"}</p>
      </div>
    </div>
  )
};
