import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Icon from '../Icon';

import './Dropdown.scss';

export default class Dropdown extends Component {

  static propTypes = {
    dropdownControlLabel: PropTypes.string.isRequired,
    mobileTitle: PropTypes.string,
    presentationType: PropTypes.string.isRequired,
    presentationText: PropTypes.string,
    dropup: PropTypes.bool,
    alignRight: PropTypes.bool,
    killFocus: PropTypes.bool,
    changeHandler: PropTypes.func
  };

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      selectedItem: ''
    }

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
    this.renderPresentation = this.renderPresentation.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleEsc);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleEsc);
  }

  handleOutsideClick(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(event.target))) {
      this.setState({ open: false });
    }
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  };

  handleEsc(event) {
    if (event.which === 27) {
      this.setState({ open: false });
    }
  }

  renderLabelPresentation() {
    return (
      <div
        className="dropdown-activator"
        onClick={this.toggleDropdown} >
        <p className="dropdown-label-text">{this.props.presentationText}</p>
      </div>
    );
  }

  renderPresentation() {
    switch (this.props.presentationType) {
      case 'label':
        return this.renderLabelPresentation();
        break;
      default:
        break;
    }
  }

  itemSelected(e) {
    if (e.target.dataset.item !== 'divider') {
      this.props.changeHandler ? this.props.changeHandler(e.target.dataset.item) : null;
      this.setState({
        open: false,
        selectedItem: e.target.dataset.item
      });
    }
  }

  render() {
    return (
        <div className="dropdown-container">
          {this.renderPresentation()}
          <ul className={this.state.open ? '' : 'dropdown-menu'} onClick={this.itemSelected}>
            {this.props.children}
          </ul>
        </div>
    )
  }

};
