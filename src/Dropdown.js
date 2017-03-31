import React, { Component, PropTypes } from 'react';

import Icon from './Icon';

import './Dropdown.scss';

class Dropdown extends Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  _handleDropDown() {
    this.setState({
      open: !this.state.open
    })
  }

  _renderListItems() {
    let items = [];
    for (let i = 0; i < this.props.list.length; i++) {
      let item = this.props.list[i];
      items.push(<li className="pe-label" key={i}>{item.listItem}</li>)
    }
    return items;
  }

  render() {
    return(
      <div>
        <div onClick={this._handleDropDown.bind(this)} className="dropdown-container">
          <button className="dropdown-btn"><Icon name='dropdown-open-18'>Open</Icon></button>
          { this.state.open
            ?
            <ul className="li-wrapper">
              {this._renderListItems()}
            </ul>
            : null
          }
        </div>

      </div>
    )
  }

};

export default Dropdown;
