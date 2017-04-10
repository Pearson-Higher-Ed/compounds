import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

import './Dropdown.scss';

let containerMargin = {
  marginRight: 0
}

class Dropdown extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      selectedItem: ''
    }

    this.toggleDropDown = _toggleDropDown.bind(this);
    this.selectedItem = _selectedItem.bind(this);
  }

  renderListItems() {
    let items = [];

    for (let i = 0; i < this.props.list.length; i++) {
      let item = this.props.list[i];
      let noGoodVarName = this.state.selectedItem === item
                          ? '-this.state.selectedItem' : null;

      const dividerLine = <div className="divider-container" key={i}>
                            <hr className="dropdown-divider" />
                          </div>;

      item === 'divider' ? items.push(dividerLine)
                         : items.push(<li key={i}
                                          onClick={this.selectedItem}>
                                        <button type="button" className="pe-label">
                                          <svg
                                            id={`svg-id${noGoodVarName}`}
                                            aria-hidden="true"
                                            focusable="false"
                                            className="pe-icon--check-sm-18">
                                            <use xlinkHref="#check-sm-18">Selected</use>
                                          </svg>
                                            <span className="dropdown-item">{item}</span>
                                        </button>
                                      </li>);
    }
    return items;
  }

  render() {

    const v = containerMargin.marginRight > 0 ? '-right' : '';

    return(
        <div onClick={this.toggleDropDown} className="dropdown-container" style={containerMargin}>
          <button className={`icon-btn${v}`}>
            <Icon name='dropdown-open-18'>Open</Icon>
          </button>
          { this.state.open &&
            <ul className="li-wrapper">
              {this.renderListItems()}
            </ul> }
        </div>

    )
  }

};

export default Dropdown;

function _toggleDropDown(e) {

  let viewWidth = document.body.clientWidth;
  let rightPoint = e.target.getBoundingClientRect().right + 20;
  let difference = viewWidth - rightPoint;
  console.log(rightPoint, 'rightPoint');
  console.log(difference, 'difference');
  console.log(e.target, 'TARGET');

  if (difference < 0) {
    containerMargin = { marginRight: Math.round(difference *= -1)}
    console.log('Add a margin-right of ' + Math.round(difference));
  }

  this.setState({ open: !this.state.open })

};

function _selectedItem(e) {
  this.setState({ selectedItem: e.target.innerText });
};
