import React      from 'react';
import { Button } from '../../Compounds';


export const DemoButton = (props) => {
  return(
    <div className="displaySection">
      <h1 className="displayTitle"><a className="displayTitleLink" href="https://pearson-higher-ed.github.io/design/c/buttons/">Button</a></h1>
      <div className="elementDescription">
        <iframe src="https://pearson-higher-ed.github.io/design/c/buttons/" style={{width:'100%', height:'100%'}}/>
      </div>
      <div className="elementContainer">
        <Button>Default</Button>
        <p className="code">{'<Button>Default</Button>'}</p>
        <Button type="primary">Primary</Button>
        <p className="code">{'<Button type="primary">Primary</Button>'}</p>
        <Button type="link">Link</Button>
        <p className="code">{'<Button type="link">Link</Button>'}</p>
        <Button disabled>Disabled</Button>
        <p className="code">{'<Button disabled>Disabled</Button>'}</p>
        <Button type="primary" disabled>Disabled</Button>
        <p className="code">{'<Button type="primary" disabled>Disabled</Button>'}</p>
        <Button type="link" disabled>Disabled</Button>
        <p className="code">{'<Button type="link" disabled>Disabled</Button>'}</p>
        <Button size="small">Small</Button>
        <p className="code">{'<Button size="small">Small</Button>'}</p>
        <Button size="large">Large</Button>
        <p className="code">{'<Button size="large">Large</Button>'}</p>
      </div>
    </div>
  )
};
