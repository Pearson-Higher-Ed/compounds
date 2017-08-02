import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Button from '../Button';
import Icon from '../Icon';

import './Dropdown.scss';

const placement = (dropdown) => {
  const anchor = dropdown.children[0];
  const element = dropdown.children[1];
  // get window geometry - this is how jQuery does it
  const elementRect = element.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();
  // then we are past the right side and need to right justify
  const touch_right = window.innerWidth < elementRect.right;
  // we need to push up
  const touch_bottom = elementRect.bottom > window.innerHeight;

  if (touch_bottom) {
    // 4 because of margins
    element.style.top = `-${(elementRect.height + 4)}px`;
  }

  if (touch_right) {
    element.style.left = `-${elementRect.width - anchorRect.width}px`;
  }

};

const resetPlacement = (dropdown) => {
  const element = dropdown.children[1];
  element.style.left = null;
  element.style.top = null;
};

export default class Dropdown extends Component {

  static propTypes = {
    mobileTitle: PropTypes.string,
    alignRight: PropTypes.bool,
    changeHandler: PropTypes.func
  };

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      selectedItem: ''
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  closeDropdown() {
    // we need to set timeout due to the browser getting the activeElement after a cycle
    // otherwise its still on the wrong active element at the time due to the function being
    // on blur
    setTimeout(() => {
      if (!ReactDOM.findDOMNode(this).contains(document.activeElement)) {
        this.setState({open: false});
      }
    }, 0);
  }

  handleOutsideClick(event) {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(event.target))) {
      this.setState({ open: false });
    }
  }

  toggleDropdown() {
    this.focusedItem = 0;
    this.setState({ open: !this.state.open });
    if(!this.state.open) {
      setTimeout(() => {
        placement(ReactDOM.findDOMNode(this));
      }, 0)
    } else {
      setTimeout(() => {
        resetPlacement(ReactDOM.findDOMNode(this));
      }, 0)
    }

  };

  handleKeyDown(event) {
    if (this.state.open) {
      if (event.which === 27) {
        // escape
        this.setState({ open: false });
      }

      if (event.which === 38) {
        // up
        event.preventDefault();
        const list = this.list;
        while (this.focusedItem > 0) {
          this.focusedItem--;
          if (list.children[this.focusedItem].attributes.role.value !== 'separator') {
            break;
          }
        }
        list.children[this.focusedItem].children[0].focus();
      }

      if (event.which === 40) {
        // down
        event.preventDefault();
        const list = this.list;
        // this is for first time hitting the down button to get to the first row
        // If we are already focused on the first element then we don't need to do this
        // and skip to the loop
        if (document.activeElement !== list.children[0].children[0]) {
          if (this.focusedItem === 0) {
            list.children[this.focusedItem].children[0].focus();
            this.focusedItem++;
            return;
          }
        }

        while (this.focusedItem < list.children.length-1) {
          this.focusedItem++;
          if (list.children[this.focusedItem].attributes.role.value !== 'separator') {
            break;
          }
        }
        list.children[this.focusedItem].children[0].focus();
      }
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

  insertAnchor() {
    let buttonClass='pe-icon--btn dropdown-activator';
    let btnIcon=false;
    let buttonLabel = this.props.label;

    switch (this.props.type) {
      case 'text':
        buttonClass = 'pe-icon--btn dropdown-activator'
        break;
      case 'button':
        buttonClass='pe-btn dropdown-activator';
        break;
      case 'icon':
        btnIcon=true;
        buttonClass= 'dropdown-activator';
        buttonLabel = (
          <Icon name="dropdown-open-sm-18">{this.props.label}</Icon>
        );
        break;
    }

    return (
      <Button
        className={buttonClass}
        aria-expanded={this.state.open}
        aria-controls={`${this.props.label.replace(' ', '_')}-dropdown`}
        aria-haspopup="true"
        btnIcon={btnIcon}>
        {buttonLabel}
      </Button>
    );
  }

  render() {
    return (
        <div className="dropdown-container" onClick={this.toggleDropdown} onBlur={this.closeDropdown} >
          {this.insertAnchor()}
          <ul
            role="menu"
            id={`${this.props.label.replace(' ', '_')}-dropdown`}
            ref={(dom) => { this.list = dom; }}
            className={this.state.open ? '' : 'dropdown-menu'}
            onClick={this.itemSelected}>
            {this.props.children}
          </ul>
        </div>
    )
  }
};
