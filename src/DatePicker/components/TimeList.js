import React, { Component } from 'react';
import { Icon } from "../../../index";

import './TimeList.scss';


export default class TimeList extends Component {

  constructor(props){
    super(props);
    this.state = {
      focusStartIndex : -1
    };

    this.listEventInterface = _listEventInterface.bind(this);

  }

  render(){

    const { id, hoursToList, timeToParent, selectedHour } = this.props;

    return (
      <ul id="list" className="pe-timepicker-list" onKeyUp={this.listEventInterface} role="listbox" aria-expanded="true" aria-live="polite">
        {
          hoursToList.map((hour,i) =>
            <li key           = {`${id}-item-${i}`}
                id            = {`${id}-item-${i}`}
                className     = "pe-timepicker-list-item-hour"
                role          = "option"
                tabIndex      = "0"
                aria-selected = {hour === selectedHour}
                onClick       = {timeToParent}
              >
              {selectedHour === hour && <Icon name="check-sm-18" />}
              {hour}
            </li>)
        }
      </ul>
    )
  }

}



function _listEventInterface(e) {

    let { focusStartIndex } = this.state;
    const listOfItems       = document.getElementsByClassName('pe-timepicker-list-item-hour');
    const list              = document.getElementById('list');
    const nextPicker        = e.target;

    switch(e.which){
      case 40:
        console.log('hit down')
        e.preventDefault();
        if(focusStartIndex >= -1 && focusStartIndex < listOfItems.length - 1){
          focusStartIndex++;
          this.setState({focusStartIndex: focusStartIndex});
          listOfItems[focusStartIndex].focus();
          list.setAttribute("aria-activedescendant", listOfItems[focusStartIndex].id);
        }
        break;
      case 38:
        e.preventDefault();
        console.log('hit up')
        if(focusStartIndex > 0 && focusStartIndex < listOfItems.length){
          focusStartIndex--;
          this.setState({focusStartIndex: focusStartIndex});
          listOfItems[focusStartIndex].focus();
          list.setAttribute("aria-activedescendant", listOfItems[focusStartIndex].id);
        }
        break;
      case 9:
        e.preventDefault();
        console.log('hit tab')
        // close with out selection and move to next element or next element in range...
        // this.props.timeToParent(e);
        // this.props.closeDropdown();
        // nextPicker.focus();
        break;
      case 27:
        e.preventDefault();
        console.log('hit esc')
        this.props.closeDropdown();
        break;
      case 32:
        e.preventDefault();
        console.log('hit space')
        // this.props.timeToParent(e);
        break;
      case 13:
        e.preventDefault();
        console.log('hit enter')
        this.props.timeToParent(e);
        break;
      default:
        console.log(`default case for ${e.key}`);
    }

};
