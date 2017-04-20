import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

class Tabs extends Component {

  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired
  }

  static defaultProps = {
    selected: 0
  }

  constructor(props) {
    super(props)

    this.state = {
      selected: this.props.selected
    }
  };

  handleClick(i, e) {
    e.preventDefault();
    this.setState({
      selected: i
    });
  }

  renderLabels() {
    function labels(child, i) {
      let activeClass = (this.state.selected === i ? 'active' : '');
      return (
        <li key={i}>
          <a href="#"
             className={activeClass}
             onClick={this.handleClick.bind(this, i)}>
               {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {

    return (
      <div className="tabs">
        {this.renderLabels()}
        {this.renderContent()}
      </div>
    )
  };
};

export default Tabs;
