import React from 'react';
import DayPicker from './DayPicker';
import DateUtils from './DateUtils';
import moment from 'moment';
import Onclickout from 'react-onclickout';
import '../../../../www/scss/calendar.scss';

export default class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      month: new Date(),
      showComponent: false,
      selectedDays: null
    };

    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showCurrentDate = this.showCurrentDate.bind(this);
  }

  handleOnClick() {
    this.setState({
      showComponent: true
    });

    this.refs.input.select();
  }

  handleOnClickOutside() {
    this.setState({
      showComponent: false
    });
  }


  handleDayClick(e, day, { selected }) {

    this.refs.input.select();

    this.setState({
      selectedDay: selected ? null : day,
      moment: moment.locale(this.props.locale),
      value: moment(day).format('L'),
      month: day,
      showComponent: false
    });
  }

  showCurrentDate() {
    this.refs.daypicker.showMonth(this.state.month);
  }

  handleInputChange(e) {
    const { value } = e.target;
    if (moment(value, 'L', true).isValid()) {
      this.setState({
        selectedDay: moment(this.state.value, 'L', true).toDate(),
        moment: moment.locale(this.props.locale),
        value: value,
        month: moment(value, 'L').toDate(),
        showComponent: true
      });
    }else if (value==0) {
      this.setState({
        showComponent: true,
        value : value
      });
    } else {
      this.setState({
        showComponent: false,
        value : value
      });
    }
  }

  render() {

    const selectedDay = moment(this.state.value, 'L', true).toDate();

    const modifiers = {
      selected_from: day => DateUtils.isSameDay(selectedDay, day)
    };


    const divStyle = {
      position: 'absolute',
      backgroundColor:'white',
      marginTop:'5px'
    };

    const divStyle1 = {
      display: 'inline-block'
    };

    return <div className="pe-input"><label htmlFor="i2">Choose a date</label>
          <div className="pe-input-group pe-input-icon">
          <div className="pe-input" style={divStyle1}>
           <Onclickout onClickOut={this.handleOnClickOutside}>
           <input ref="input" type="text" id="i2" maxLength="10"
           placeholder={(moment.localeData(this.props.locale)._longDateFormat.L).toLowerCase()}
           onClick={this.handleOnClick}  value={this.state.value}
           onChange={this.handleInputChange}
           onFocus={this.handleOnClick} />

           <span className="pe-btn pe-btn--medium">
           <i className="pe-icon--calendar" aria-hidden="true"></i>
           <span className="pe-sr-only"></span></span>
              {this.state.showComponent ? <div style={divStyle} >
                <DayPicker enableOutsideDays id="i1"
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
                initialMonth={this.state.month} locale={this.props.locale} /></div> : null
              }
          </Onclickout></div>
          </div></div>;
  }
}
