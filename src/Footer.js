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

  renderLinks() {
    let items = [];
    let themeCheck = this.props.light ? '-light' : '';
    const year = new Date().getFullYear();
    const copyrightText = <p className={`footer-copyright-text${themeCheck}`}>
                            Copyright &copy; {year} Pearson Education Inc.
                            All rights reserved.
                          </p>;

    for (let i = 0; i < this.props.links.length; i++) {
      let item = this.props.links[i];
      items.push(<li key={i} className="li-a">
                   <a className={`footer-link${themeCheck}`} href={item.href}>{item.text}</a>
                   <span className={`separator${themeCheck}`} aria-hidden={true}>|</span>
                   {i === this.props.links.length - 1 ? copyrightText : null}
                 </li>);
    }
    return items;
  }

  componentDidMount() {
    const screenCheck = document.body.scrollHeight > window.innerHeight + 442 ?
                        this.setState({ position: 'pda-footer-noAbsolute' })  :
                        this.setState({ position: 'pda-footer' });
  }

  render() {

    return (
        <footer>
          <div className={this.state.position}>
            <ul className="li-container">
              {this.renderLinks()}
            </ul>
          </div>
        </footer>
    )
  }
}
