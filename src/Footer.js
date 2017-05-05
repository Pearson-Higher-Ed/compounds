import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

export default class Footer extends Component {

  static propTypes = {
    links: PropTypes.array.isRequired,
    light: PropTypes.bool
  }

  static defaultProps = {
    light: false
  }

  renderCopy() {
    const year = new Date().getFullYear();
    return (<p>
                Copyright &#169; {year} Pearson Education Inc.
                All rights reserved.
            </p>);
  }

  renderLinks() {
    let items = [];

    for (let i = 0; i < this.props.links.length; i++) {
      let item = this.props.links[i];
      items.push(<li key={i}>
                   <a href={item.href}>{item.text}</a>
                   <span aria-hidden={true}>|</span>
                 </li>);
    }
    return items;
  }

  render() {
    const body = document.body;
    return (
        <div>
        {console.log(body.offsetHeight, 'body offsetHeight')}
        {console.log(window.innerHeight, 'window innerHeight')}
        {console.log((body.offsetHeight>window.innerHeight))}
        <footer className={'pe-footer pe-label'+((this.props.light)?' pe-footer--light':'')+((body.offsetHeight<window.innerHeight)?' pe-footer--stick':'')}>
            <ul>
              {this.renderLinks()}
            </ul>
            {this.renderCopy()}
        </footer>
        </div>
    )
  }
}
