import React, { Component, PropTypes } from 'react';

import Icon from './Icon';

import './Dropdown.scss';

class Dropdown extends Component {

  static propTypes = {
    list: React.PropTypes.array.isRequired
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
    let opacity = {opacity: 0};

    for (let i = 0; i < this.props.list.length; i++) {
      let item = this.props.list[i];
      console.log(this.state.selectedItem, 'test');

      const dividerLine = <div className="divider-container" key={i}>
                            <hr className="dropdown-divider" />
                          </div>;

      item === 'divider' ? items.push(dividerLine)
                         : items.push(<li key={i}
                                          onClick={this.selectedItem}>
                                        <button type="button" className="pe-label">
                                          <svg
                                            id={"svg-id" + (this.state.selectedItem !== ''
                                              ? `-${this.state.selectedItem}` : '')}
                                            aria-hidden="true"
                                            focusable="false"
                                            style={opacity}
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

    return(
      <div>
        <div onClick={this.toggleDropDown} className="dropdown-container">
          <button className="icon-btn"><Icon name='dropdown-open-18'>Open</Icon></button>
          { this.state.open
            ?
            <ul className="li-wrapper">
              {this.renderListItems()}
            </ul>
            : null
          }
        </div>

      </div>
    )
  }

};

export default Dropdown;

function _toggleDropDown() {
  this.setState({ open: !this.state.open })
};

function _selectedItem(e) {
  this.setState({ selectedItem: e.target.innerText });
};
