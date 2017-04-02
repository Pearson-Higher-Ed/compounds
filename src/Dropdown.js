import React, { Component, PropTypes } from 'react';

import Icon from './Icon';

import './Dropdown.scss';

class Dropdown extends Component {

  static propTypes = {
    list: React.PropTypes.array.isRequired,
    lineBreak: React.PropTypes.bool
  };

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  handleDropDown() {
    this.setState({
      open: !this.state.open
    })
  }

  renderListItems() {
    let items = [];
    for (let i = 0; i < this.props.list.length; i++) {
      let item = this.props.list[i];
      items.push(<li key={i}>
                  <button type="button" className="pe-label">
                    <Icon name='check-sm-18'>Selected</Icon>
                    <span>{item}</span>
                  </button>
                </li>);
    }
    return items;
  }

  render() {

    return(
      <div>
        <div onClick={this.handleDropDown.bind(this)} className="dropdown-container">
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
