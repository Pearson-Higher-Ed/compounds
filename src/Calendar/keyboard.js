componentWillMount() {
  document.body.addEventListener('keydown', this.handleKeys);
}

componentWillUnmount() {
  document.body.removeEventListener('keydown', this.handleKeys);
}

handleKeys = (e) => {
  const { theSelectedDate } = this.props;

  if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 || e.which === 13) {
    e.preventDefault();
  }

  switch (e.which) {
    case 13: this.props.handleSelect(); break; //enter
    case 37: this.handleDayArrowKey(time.addDays(selectedDate, -1)); break; // left
    case 38: this.handleDayArrowKey(time.addDays(selectedDate, -7)); break; // up
    case 39: this.handleDayArrowKey(time.addDays(selectedDate, 1)); break; // right
    case 40: this.handleDayArrowKey(time.addDays(selectedDate, 7)); break; // down
    default: break;
  }
}

handleDayArrowKey = (date) => {
  this.setState({ viewDate: date });
  this.props.onChange(date, false);
}
