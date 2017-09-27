import React, { Component } from 'react';
import ReactDom             from 'react-dom';
import PropTypes            from 'prop-types';
import { Icon }             from '../../index';
import { List }             from './components/List';
import moment               from 'moment';

import './TimePicker.scss';


export default class TimePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusStartIndex : 0,
      timePickerValue : this.props.timePickerValue
    };

    this.applyTimePickerStyles = _applyTimePickerStyles.bind(this);
    this.timePickerFocus       = _timePickerFocus.bind(this);
    this.listHandler           = _listHandler.bind(this);
    this.changeHandler         = _changeHandler.bind(this);
    this.inputEvents           = _inputEvents.bind(this);
    this.listEventInterface    = _listEventInterface.bind(this);

  }

  componentDidMount(){
    this.applyTimePickerStyles(this.props.inputState);
    document.addEventListener('click', this.clickListener);
  }

  componentWillReceiveProps(nextProps){
    this.applyTimePickerStyles(this.state.validatedState ? this.state.validatedState : nextProps.inputState);
    this.setState({timePickerValue: nextProps.timePickerValue});
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickListener);
  }

  clickListener = (e) => {
    const domNode = ReactDOM.findDOMNode(this);

    if ((!domNode || !domNode.contains(e.target))) {
      this.setState({ displayOpen: false });
    }
  }

  render() {

    const { inputStyle, labelStyleTmp, labelStyle, displayOpen, timePickerValue,
            spanStyle, containerStyle, placeholder
          } = this.state;
    const { className, inputState, id, labelText, timeFormat, infoMessage,
            errorMessage, twentyFourHour, TWENTYFOUR_HOURS, HOURS, hideLabel
          } = this.props;

    const em                  = (inputState === 'error' && errorMessage) ? `errMsg-${id} ` : '';
    const ariaDescribedby     = em + (infoMessage ? `infoMsg-${id}` : '');
    const mainContainerStyles = className  ? `pe-timePicker-main ${className}`:`pe-timePicker-main`;
    const inputStyles         = inputStyle ? `pe-timePicker-input-styles ${inputStyle}`:`pe-timePicker-input-styles`;
    const hoursToList         = twentyFourHour ? TWENTYFOUR_HOURS : HOURS;
    const labelCheck          = hideLabel ? ' pe-sr-only' :'';

    return (
      <div className={mainContainerStyles} onKeyDown={this.inputEvents} onFocus={this.timePickerFocus}>
        <label className={`${labelStyleTmp}${labelCheck}`} htmlFor={id}>{`${labelText} (${timeFormat})`}</label>

        <div className={containerStyle}>
          <input
            type             = "text"
            id               = {id}
            placeholder      = {placeholder}
            value            = {timePickerValue}
            className        = {inputStyles}
            aria-describedby = {ariaDescribedby}
            aria-invalid     = {inputState === 'error'}
            disabled         = {inputState === 'disabled'}
            readOnly         = {inputState === 'readOnly'}
            onChange         = {this.changeHandler}
          />
          <span className="pe-iconWrapper"><Icon name={"clock-18"} /></span>
        </div>

        {infoMessage  && <span id={`infoMsg-${id}`} className="pe-input--info_message">{infoMessage}</span>}
        {errorMessage && inputState === 'error' && <span id={`errMsg-${id}`} className="pe-input--error_message">{errorMessage}</span>}

        {displayOpen  && inputState !== 'readOnly' && <div className="pe-dropdownContainer">
          <List
            id={`${id}-list`}
            listRef={ul => this.list = ul}
            listEvents={this.listEventInterface}
            itemsToList={hoursToList}
            selectedItem={timePickerValue}
            itemToParent={this.listHandler}
          />
        </div>}

      </div>
    );

  }

}


TimePicker.defaultProps = {
  HOURS            : ["1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"],
  TWENTYFOUR_HOURS : ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]
};


TimePicker.propTypes = {
  id               : PropTypes.string.isRequired,
  labelText        : PropTypes.string.isRequired,
  timeFormat       : PropTypes.string.isRequired,
  changeHandler    : PropTypes.func.isRequired,
  infoMessage      : PropTypes.string,
  errorMessage     : PropTypes.string,
  inputState       : PropTypes.string,
  className        : PropTypes.string,
  HOURS            : PropTypes.array,
  TWENTYFOUR_HOURS : PropTypes.array,
  twentyFourHour   : PropTypes.bool,
  hideLabel        : PropTypes.bool
};


function _timePickerFocus(){
  const { inputState, labelFocusStyle } = this.state;
  if(inputState !== 'readOnly' || inputState !== 'disabled'){
    this.setState({ labelStyleTmp:labelFocusStyle, displayOpen:true });
  }
};

function _changeHandler(e){
  this.setState({ timePickerValue:e.target.value, displayOpen:false, labelStyleTmp:this.state.labelStyle });
  this.props.changeHandler.call(this, e.target.value);
};

function _listHandler(e){
  const changeHandlerParam = {
    target: {
      value: e.target.innerText.toUpperCase()
    }
  };
  this.setState({ timePickerValue:e.target.innerText, displayOpen:false, labelStyleTmp:this.state.labelStyle });
  this.changeHandler(changeHandlerParam);
};

function _inputEvents(e){
  switch(e.which){
    case 40:  //down arrow
      e.preventDefault();
      this.list.children[0].focus();
      break;
    case 27:  //esc
      this.setState({ displayOpen:false, labelStyleTmp:this.state.labelStyle });
      break;
    case 9:   //tab
      this.setState({ displayOpen:false, labelStyleTmp:this.state.labelStyle });
      break;
  };
};

function _listEventInterface(e) {
  let { focusStartIndex } = this.state;

  switch(e.which){
    case 40:  //down arrow
      e.stopPropagation();
      e.preventDefault();
      if(focusStartIndex >= 0 && focusStartIndex < this.list.children.length - 1){
        focusStartIndex++;
        this.setState({focusStartIndex});
        this.list.children[focusStartIndex].focus();
        this.list.setAttribute("aria-activedescendant", this.list.children[focusStartIndex].id);
      }
      break;
    case 38:  //up arrow
      e.stopPropagation();
      e.preventDefault();
      if(focusStartIndex > 0 && focusStartIndex < this.list.children.length){
        focusStartIndex--;
        this.setState({focusStartIndex});
        this.list.children[focusStartIndex].focus();
        this.list.setAttribute("aria-activedescendant", this.list.children[focusStartIndex].id);
      }
      break;
    case 13:  //enter
      e.preventDefault();
      this.listHandler(e);
      break;
  };
};

function _applyTimePickerStyles(inputState) {
  let { labelStyle, inputStyle, labelFocusStyle, labelStyleTmp, containerStyle } = this.state;

  switch (inputState) {
    case 'error':
      labelStyle      = 'pe-textLabelInput__label--label_error';
      labelFocusStyle = 'pe-textLabelInput__label--label_error';
      inputStyle      = 'pe-textInput--basic_error';
      containerStyle  = 'pe-timePicker-container';
      break;
    case 'disabled':
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      containerStyle  = 'pe-timePicker-container';
      inputStyle      = 'pe-textInput--basic';
      break;
    case 'readOnly':
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label';
      inputStyle      = 'pe-textInput--input_readonly';
      containerStyle  = 'pe-timePicker-container';
      break;
    default:
      labelStyle      = 'pe-textLabelInput__label';
      labelFocusStyle = 'pe-textLabelInput__label--label_focus';
      inputStyle      = 'pe-textInput--basic';
      containerStyle  = 'pe-timePicker-container';
  };

  this.setState({ labelStyle, labelStyleTmp:labelStyle, inputStyle, labelFocusStyle, containerStyle });

};
