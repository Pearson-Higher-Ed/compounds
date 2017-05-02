import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

export default class Footer extends Component {

  static propTypes = {
    links: PropTypes.array.isRequired
  }

  renderLinks() {
    let items = [];
    for (let i = 0; i < this.props.links.length; i++) {
      let item = this.props.links[i];
      items.push(<a href={item.href} key={i}>{item.text}</a>);
    }
    return items;
  }

  render() {

    return (
      <div className="footer">
        {this.renderLinks()}
        <p>Copyright &copy; 2017 Pearson Education Inc. All rights reserved.</p>
      </div>
    )
  }
}
