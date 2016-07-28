import React from 'react';
import DayPicker from './DayPicker';
import DateUtils from './DateUtils';
import moment from 'moment';
import Onclickout from 'react-onclickout';

export default class DatePickerRange extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      month: new Date()
    };

    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
    this.handleOnClickFrom = this.handleOnClickFrom.bind(this);
    this.handleOnClickTo = this.handleOnClickTo.bind(this);
    this.handledoubleClick = this.handledoubleClick.bind(this);
    this.handleDayClickFrom = this.handleDayClickFrom.bind(this);
    this.handleDayClickTo = this.handleDayClickTo.bind(this);
    this.handleInputChangeFrom = this.handleInputChangeFrom.bind(this);
    this.handleInputChangeTo = this.handleInputChangeTo.bind(this);
    this.showCurrentDateFrom = this.showCurrentDateFrom.bind(this);
    this.showCurrentDateTo = this.showCurrentDateTo.bind(this);
  }

  handleOnClickFrom() {
    const fromDate = this.state.from;

    this.setState({
      showComponentFrom: true,
      showComponentTo: false
    });
    this.refs.inputFrom.select();

    if (fromDate) {
      this.setState({
        month: new Date(fromDate)
      });
    }
  }

  handleOnClickTo() {
    const toDate = this.state.to;

    this.setState({
      showComponentFrom: false,
      showComponentTo: true
    });
    this.refs.inputTo.select();

    if (toDate) {
      this.setState({
        month: new Date(toDate)
      });
    }
  }

  handledoubleClick() {
    this.setState({
      showComponentFrom: false
    });
  }

  handleOnClickOutside() {
    this.setState({
      showComponentFrom: false,
      showComponentTo: false
    });
  }

  handleDayClickFrom(e, day) {

    const { from, to } = this.state;

    this.refs.inputFrom.select();

    let range = null;
    let selectedMonth = false;

    if (day <= to && from !== '' && to !== '' && !DateUtils.isSameDay(from, day)) {

      range = DateUtils.addDayToRange1(day, this.state);
      this.refs.inputTo.select();

      this.setState({
        month: new Date(to)
      });

      selectedMonth = true;

    }else if (day > to && to !== '') {
      range = DateUtils.addDayToRange2(day, this.state);

      this.refs.inputTo.select();
      this.state = { text: '' };

    }else if ((day > from || day < from || day < to) && (from !== '')) {
      range = DateUtils.addDayToRange1(day, this.state);

    }else {
      range = DateUtils.addDayToRange(day, this.state);
    }

    this.setState(range);

    if (!selectedMonth) {
      this.setState({
        moment: moment.locale(this.props.locale),
        value: moment(day).format('L'),
        month: day
      })
    }

    this.setState({
      showComponentFrom: false,
      valFrom: true
    });
  }

  handleDayClickTo(e, day) {
    const { from, to } = this.state;

    this.refs.inputTo.select();

    let range = null;

    if (from === '' || (from && to === '' && DateUtils.isSameDay(from, day))) {
      range = DateUtils.addDayToRange1(day, this.state);
    }else {
      range = DateUtils.addDayToRange(day, this.state);
    }

    this.setState(range);

    this.setState({
      moment: moment.locale(this.props.locale),
      value: moment(day).format('L'),
      month: day,
      showComponentTo: false,
      valTo: true
    });
  }

  showCurrentDateFrom() {
    this.refs.daypickerfrom.showMonth(this.state.month);
  }

  showCurrentDateTo() {
    this.refs.daypickerto.showMonth(this.state.month);
  }

 handleInputChangeFrom(e) {
   const { from } = e.target;

   if (moment(from, 'L', true).isValid()) {
     this.setState({
       month: moment(from, 'L').toDate(),
       from: moment().format('L')
     }, this.showCurrentDateFrom);
   } else {
     this.setState({ from }, this.showCurrentDateFrom);
   }
 }

 handleInputChangeTo(e) {
   const { to } = e.target;

   if (moment(to, 'L', true).isValid()) {
     this.setState({
       month: moment(to, 'L').toDate(),
       to: moment().format('L')
     }, this.showCurrentDateTo);
   } else {
     this.setState({ to }, this.showCurrentDateTo);
   }
 }

  render() {

    const { from, to, month } = this.state;
    const { locale } = this.props;

    const date = new Date(from);

    const modifiers = {
      selected_from: day => DateUtils.isSameDay(from, day),
      highlighted: day => DateUtils.isDayInRange(day, this.state)

    };

    const modifier = {
      selected_to: day => DateUtils.isSameDay(to, day),
      highlighted: day => DateUtils.isDayInRange(day, this.state),
      disabled: day => DateUtils.isPastDay(day, date)
    };

    const divStyle = {
      position: 'absolute',
      backgroundColor:'white',
      marginTop:'5px'
    };
    const divStyle1 = {
      display: 'inline-block',
      paddingRight:'5px'
    };

    return (<div>
    <div className="pe-input" style={divStyle1}><label htmlFor="i1">Choose a start date</label>
          <div className="pe-input-group pe-input-icon">
          <div className="pe-input" style={divStyle1}>
           <Onclickout onClickOut={this.handleOnClickOutside}>
           <input ref="inputFrom" type="text" id="i1"
           placeholder={(moment.localeData(locale)._longDateFormat.L).toLowerCase()}
           onClick={this.handleOnClickFrom}
           value={this.state.valFrom ? moment(from).locale(locale).format('L') : from}

           onChange={this.handleInputChangeFrom}
           onFocus={this.handleOnClickFrom} />

           <span className="pe-btn pe-btn--medium">
           <i className="pe-icon--calendar" aria-hidden="true"></i>
           <span className="pe-sr-only"></span></span>
              {this.state.showComponentFrom ? <div style={divStyle} >
                <DayPicker enableOutsideDays id="i1" refs="daypickerfrom"
                modifiers={modifiers}
                onDayClick={this.handleDayClickFrom}
                initialMonth={month} locale={locale} /></div> : null
              }
          </Onclickout></div>
          </div></div>

          <div className="pe-input" style={divStyle1}><label htmlFor="i2">Choose an end date</label>
                <div className="pe-input-group pe-input-icon">
                <div className="pe-input" style={divStyle1}>
                 <Onclickout onClickOut={this.handleOnClickOutside}>
                 <input ref="inputTo" type="text" id="i2"
                 placeholder={(moment.localeData(locale)._longDateFormat.L).toLowerCase()}
                 onClick={this.handleOnClickTo}
                 value={this.state.valTo ? moment(to).locale(locale).format('L') : ''}
                 onChange={this.handleInputChangeTo}
                 onFocus={this.handleOnClickTo} />

                 <span className="pe-btn pe-btn--medium">
                 <i className="pe-icon--calendar" aria-hidden="true"></i>
                 <span className="pe-sr-only"></span></span>
                    {this.state.showComponentTo ? <div style={divStyle} >
                      <DayPicker enableOutsideDays id="i2 " refs="daypickerto"
                      modifiers={modifier}
                      onDayClick={this.handleDayClickTo}
                      initialMonth={month} locale={locale} /></div> : null
                    }
                </Onclickout></div>
                </div></div>

          </div>);
  }
}
