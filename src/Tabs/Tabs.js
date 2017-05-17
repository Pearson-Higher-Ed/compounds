import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends Component {

  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired,
    light: PropTypes.bool
  }

  static defaultProps = {
    selected: 0,
    light: false
  }

  constructor(props) {
    super(props)

    this.state = {
      selected: this.props.selected
    }
  };

  handleClick(i, event) {
    event.preventDefault();
    this.setState({
      selected: i
    });
  }

  renderLabels() {
    function labels(child, i) {
      let activeClass = this.state.selected === i ? 'activeTab' : '';
      let tabI = activeClass ? "0" : "-1";
      let ariaSelected = activeClass ? true : false;
      const themeCheck = this.props.light ? 'light' : '';

      return (
        <li key={i} role="presentation">
          <a href="#"
             role="tab"
             tabIndex={tabI}
             aria-selected={ariaSelected}
             className={`pe-label ${themeCheck} ${activeClass}`}
             onClick={this.handleClick.bind(this, i)}>
               {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels" role="tablist">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  renderContent() {
    return (
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {

    return (
      <div>
        {this.renderLabels()}
        {this.renderContent()}
      </div>
    )
  };
};
