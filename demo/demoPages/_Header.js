import React    from 'react';
import { Link } from 'react-router';
import { Icon } from '../../Compounds';

export const Header = (props) => (
  <div className="container">
    <div className="header">
      <Icon name="item-add-24" />
      <Link to={`/`}>Home</Link>
      &nbsp;
      <Link to={`/button`}>Button</Link>
      &nbsp;
      <Link to={`/icon`}>Icon</Link>
    </div>
    {props.children}
  </div>
)
