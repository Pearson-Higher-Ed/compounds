import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

export default class Footer extends Component {

  static propTypes = {
    copyrightText: PropTypes.string,
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
              Copyright &copy; {year} {this.props.copyrightText}
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
    const that = this;
    (document.body.scrollHeight > (window.innerHeight * 1.5))
    ? this.setState({position: ''}) : this.setState({position: '--stick'});

    ((() => {
      window.addEventListener("resize", resizeThrottler, false);
      let resizeTimeout;

      function resizeThrottler() {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            actualResizeHandler();
         }, 500);
        }
      }

      function actualResizeHandler() {
        (document.body.scrollHeight > (window.innerHeight * 1.5))
        ? that.setState({position: ''}) : that.setState({position: '--stick'});
      }

    })());
  }

  render() {

    return (
        <footer className={`pe-footer${this.state.position} pe-label ${(this.props.light)? 'pe-footer--light':''}`}>
          <ul>
            {this.renderLinks()}
          </ul>
          {this.renderCopy()}
        </footer>
    )
  }
}
