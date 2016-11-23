import React      from 'react';
import { Button } from '../../Compounds';


export const DemoButton = (props) => {
  return(
    <div className="displaySection">
      <h2><a href="https://pearson-higher-ed.github.io/design/c/buttons/">Button</a></h2>

      <div className="elementDescription">
        <iframe src="http://pearson-higher-ed.github.io/design/c/buttons/beta/" title="Buttons v2 Design page"  style={{width:'100%', height:'100%'}}/>
      </div>

      <div className="elementContainer">
        <Button>Default</Button>
        <p className="code">{'<Button>Default</Button>'}</p>
        <Button btntype="primary">Primary</Button>
        <p className="code">{'<Button btntype="primary">Primary</Button>'}</p>
        <Button btntype="cta">Call to Action</Button>
        <p className="code">{'<Button btntype="cta">Call to Action</Button>'}</p>
        <Button disabled>Disabled</Button>
        <p className="code">{'<Button disabled>Disabled</Button>'}</p>
        <Button btntype="primary" disabled>Disabled</Button>
        <p className="code">{'<Button btntype="primary" disabled>Disabled</Button>'}</p>
        <Button btnsize="small">Small</Button>
        <p className="code">{'<Button btnsize="small">Small</Button>'}</p>
        <Button btnsize="large">Large</Button>
        <p className="code">{'<Button btnsize="large">Large</Button>'}</p>
        <Button btnsize="xlarge">XLarge</Button>
        <p className="code">{'<Button btnsize="xlarge">XLarge</Button>'}</p>
        <Button btntype="primary" btnsize="xlarge">XLarge</Button>
        <p className="code">{'<Button btntype="primary" btnsize="xlarge">XLarge</Button>'}</p>
      </div>
    </div>
  )
};
