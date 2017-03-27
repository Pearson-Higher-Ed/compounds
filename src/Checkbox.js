import React, { Component, PropTypes } from 'react';
import { Icon }                        from '../index.js';


class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayCheck : false,
      checked      : this.props.checked  || false,
      disabled     : this.props.disabled || false
    };
  }

  render() {

    const { checked, disabled, displayCheck } = this.state;
    const { id, value, labelText }            = this.props;

    const toggleCheckConditional = (checked || disabled) ? null : () => this.setState({displayCheck:!displayCheck});

    return (
      <div className="pe-checkbox"  onClick={toggleCheckConditional}>
        <input type="checkbox" id={id} value={value} defaultChecked={checked} disabled={disabled} onChange={toggleCheckConditional} />
        <label htmlFor="checkboxInput">{labelText}</label>
        <span>
          {checked || displayCheck && <Icon name="check-sm-18" />}
        </span>
      </div>
    )
  }
};


export default Checkbox;


Checkbox.propTypes = {
  id        : PropTypes.string,
  value     : PropTypes.string,
  labelText : PropTypes.string,
  checked   : PropTypes.bool,
  disabled  : PropTypes.bool
};
