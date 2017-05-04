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
                   {i === (this.props.links.length - 1) ? copyrightText : null}
                 </li>);
    }
    return items;
  }

  render() {
    const body = document.body;
    const html = document.documentElement;

    return (
        <footer>
          <div className="pda-footer">
            <ul className="li-container">
              {this.renderLinks()}
              {console.log(body.scrollHeight, 'scrollHeight')}
              {console.log(body.offsetHeight, 'offsetHeight')}
              {console.log(html.clientHeight, 'clientHeight')}
              {console.log(html.scrollHeight, 'html scrollHeight')}
              {console.log(html.offsetHeight, 'html offsetHeight')}
            </ul>
          </div>
        </footer>
    )
  }
}
