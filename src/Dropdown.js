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

      const dividerLine = <div className="divider-container" key={i}>
                            <hr className="dropdown-divider" />
                          </div>;

      item === 'divider' ? items.push(dividerLine)
                         : items.push(<li key={i}
                                          onClick={this.selectedItem}>
                                        <button type="button" className="pe-label">
                                          <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            className="pe-icon--check-sm-18"
                                            style={opacity}>
                                            <use xlinkHref="#check-sm-18"></use>
                                          </svg>
                                            <span className="dropdown-item">{item}</span>
                                        </button>
                                      </li>);

      item === this.state.selectedItem ? opacity = {opacity: 1} : opacity = {opacity: 0};
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
  const textTarget = e.target.innerText;
  this.setState({ selectedItem: textTarget });
  console.log(textTarget, 'state item');
};
