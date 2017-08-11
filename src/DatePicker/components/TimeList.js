import React, { Component } from 'react';
import { Icon } from "../../../index";

import './TimeList.scss';


export default class TimeList extends Component {

  constructor(props){
    super(props);
    this.state = { focusStartIndex : 0 };

    this.listEventInterface = _listEventInterface.bind(this);
  }

  render(){

    const { id, hoursToList, timeToParent, selectedHour, timeListRef } = this.props;

    return (
      <ul id="timelist" className="pe-timepicker-list" ref={timeListRef} onKeyUp={this.listEventInterface} role="listbox" aria-expanded="true" aria-live="polite">
        {
          hoursToList.map((hour,i) =>
            <li key           = {`${id}-item-${i}`}
                id            = {`${id}-item-${i}`}
                ref           = {li => this.item = li}
                className     = "pe-timepicker-list-item-hour"
                role          = "option"
                tabIndex      = "-1"
                onFocus       = {() => this.setState({focusStartIndex:i})}
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
    const list              = this.list;
console.log(list)
    switch(e.which){
      case 40:  //keypress: down arrow
        e.stopPropagation();
        if(focusStartIndex >= 0 && focusStartIndex < list.children.length - 1){
          focusStartIndex++;
          list.children[focusStartIndex].focus();
          list.setAttribute("aria-activedescendant", list.children[focusStartIndex].id);
        }
        break;
      case 38:  //keypress: up arrow
        if(focusStartIndex > 0 && focusStartIndex < list.children.length){
          focusStartIndex--;
          list.children[focusStartIndex].focus();
          list.setAttribute("aria-activedescendant", list.children[focusStartIndex].id);
        }
        break;
      case 13:  //keypress: enter
        this.props.timeToParent(e);
        break;
    };

};
