import React      from 'react';
import { Link }   from 'react-router';
import { Icon }   from '../../Compounds';
import { Button } from '../../Compounds';

export const Header = (props) => (
  <div className="container">
    <div className="header">
      <Link to="/demo"><h4 className="headerTitle">Pearson Design Accelerator</h4></Link>
      <Button btnSize="xlarge" onClick={toggleList}>
        Compounds
        <Icon name="dropdown-open-18" />
      </Button>
    </div>
    <ul className="buttonList">
      <li><Link className="link" to={`/demo`}>Home</Link></li>
      <li><Link className="link" to={`/button`}>Button</Link></li>
      <li><Link className="link" to={`/icon`}>Icon</Link></li>
    </ul>
    {props.children}
  </div>
)



const toggleList = () => {
  let c = document.querySelector('.buttonList').style.display;
  c = (c !== 'initial') ? 'initial' : 'none';
  document.querySelector('.buttonList').style.display = c;
}
