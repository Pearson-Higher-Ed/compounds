import React, { Component } from 'react';

class Tabs extends Component {

  static defaultProps = {
    selected: 0
  }

  constructor(props) {
    super(props)

    this.state = {
      selected: this.props.selected
    }
  };

  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  _renderTitles() {
    function labels(child, index) {
      return (
        <li key={index}>
          <a href="#">
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

  render() {

    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    )
  };
};

export default Tabs;
