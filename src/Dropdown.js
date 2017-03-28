import React, { Component, PropTypes } from 'react';

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

  render() {
    return(
      <div>
        <div onClick={this._handleDropDown.bind(this)}>
          <button>Toggle</button>
          { this.state.open
            ?
            <ul className="li-wrapper">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>

            : null
          }
        </div>

      </div>
    )
  }

};

export default Dropdown;
