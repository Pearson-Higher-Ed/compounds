import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

class Pane extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div className="content-text">
        {this.props.children}
      </div>
    )
  }
}

export default Pane;
