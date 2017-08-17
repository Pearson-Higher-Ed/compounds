import React, { Component } from 'react';
import Phone from 'react-phone-number-input';

import rrui from 'react-phone-number-input/rrui.css';
import rpni from 'react-phone-number-input/style.css';

export default class PhoneNumber extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Phone
          placeholder="Test text"
          onChange={blah => console.log(blah)}
        />
      </div>
    )
  }
}
