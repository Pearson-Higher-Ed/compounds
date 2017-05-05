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

  constructor(props) {
    super(props)

    this.state = {
      position: ''
    }
  }

  renderCopy() {
    const year = new Date().getFullYear();
    return (<p>
              Copyright &copy; {year} Pearson Education Inc.
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

  componentDidMount() {
    const screenCheck = document.body.scrollHeight > window.innerHeight + 442
                        ? '' : this.setState({ position: '--stick' });
  }

  render() {

    return (
        <footer className={`pe-footer${this.state.position} pe-label`+((this.props.light)?' pe-footer--light':'')}>
          <ul className="li-container">
            {this.renderLinks()}
          </ul>
          {this.renderCopy()}
        </footer>
    )
  }
}
