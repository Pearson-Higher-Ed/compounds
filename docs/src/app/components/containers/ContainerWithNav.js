import React, { PropTypes } from 'react';
import Nav from '../Nav';

function ContainerWithNav(props) {
  return (
    <div>
      <div>
        <Nav data={props.navData} />
      </div>
      <div>{props.children}</div>
    </div>
  );
}

ContainerWithNav.propTypes = {
  navData: PropTypes.array.isRequired
};

export default ContainerWithNav;
