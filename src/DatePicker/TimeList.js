import React, { Component } from 'react';
import { Icon } from "../../index";

import './TimeList.scss';


export default class TimeList extends Component {

  constructor(props){
    super(props);
    this.state = {
      focusStartIndex : -1
    };

  }

  componentWillMount(){
    document.body.addEventListener('keyup', this::_listEventInterface);
  }

  render(){

    const { id, hoursToList, timeToParent, selectedHour } = this.props;

    return (
      <ul id="list" className="pe-timepicker-list" role="listbox" aria-expanded="true" aria-live="polite">
        {
          hoursToList.map((hour,i) =>
            <li key           = {`timeList-${id}-item-${i}`}
                id            = {`timeList-${id}-item-${i}`}
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

  componentWillUnmount(){
    document.body.removeEventListener('keyup', this::_listEventInterface);
  }

}



function _listEventInterface(e) {

    let { focusStartIndex } = this.state;
    const listOfItems       = document.getElementsByClassName('pe-timepicker-list-item-hour');

    switch(e.which){
      case 40:
        console.log('hit down')
        if(focusStartIndex >= -1 && focusStartIndex < listOfItems.length - 1){
          this.setState({focusStartIndex: focusStartIndex++});
          listOfItems[focusStartIndex].focus();
        }
        break;
      case 38:
        console.log('hit up')
        if(focusStartIndex > 0 && focusStartIndex < listOfItems.length){
          this.setState({focusStartIndex: focusStartIndex--});
          listOfItems[focusStartIndex].focus();
        }
        break;
      case 27:
        console.log('hit esc')
        this.setState({displayOpen:false, labelStyleTmp:this.state.labelStyle})
        break;
      case 32:
        console.log('hit space')
        this.props.timeToParent(e);
        break;
      case 13:
        console.log('hit enter')
        this.setState({displayOpen:false, labelStyleTmp:this.state.labelStyle});
        break;
      default:
        console.log(`default case for ${e.key}`);
    }

};
