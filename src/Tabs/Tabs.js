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

    document.addEventListener('mousedown',() => {document.body.classList.add('mouseDetected');},false);
    document.addEventListener('keydown',() => {document.body.classList.remove('mouseDetected');},false);
  };

  handleClick(i, event) {
    event.preventDefault();
    this.setState({
      selected: i
    });
  }

  componentDidMount() {
    const parentUl = document.querySelector('.tabs__labels');
    const tabArray = parentUl.querySelectorAll('[role=tab]');
    const lastTabArray = tabArray.length - 1;

    parentUl.addEventListener("keydown", (event) => {
      const selectedIndex = this.state.selected;
      if (selectedIndex === 0 && event.keyCode === 37) {
        tabArray[lastTabArray].focus();
        this.setState({ selected: lastTabArray });
      }
      if (selectedIndex === lastTabArray && event.keyCode === 39) {
        tabArray[0].focus();
        this.setState({ selected: 0 });
      }
      if (selectedIndex !== 0 && event.keyCode === 37) {
        tabArray[selectedIndex - 1].focus();
        this.setState({ selected: selectedIndex - 1 });
      }
      if (selectedIndex !== lastTabArray && event.keyCode === 39) {
        tabArray[selectedIndex + 1].focus();
        this.setState({ selected: selectedIndex + 1 });
      }
    }, true)

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
