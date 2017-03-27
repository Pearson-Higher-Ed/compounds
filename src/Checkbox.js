import React, { Component, PropTypes } from 'react';
import { Icon }                        from '../index.js'


class Checkbox extends Component {

  constructor(props){
    super(props);
    this.state = {
      checked     : this.props.checked  || false,
      disabled    : this.props.disabled || false,
      toggleCheck : () => this.setState({checked:!checked})
    };
  }

  render() {

    const { checked, disabled , toggleCheck } = this.state;
    const { id, value, labelText }            = this.props;

    return (
      <div className="pe-checkbox">
        <input type="checkbox" id={id} value={value} checked={checked} disabled={disabled} onChange={checked || disabled && toggleCheck} />
        <label htmlFor="checkboxInput">{labelText}</label>
        <span>
          <Icon name="check-sm-18" />
        </span>
      </div>
    )
  }
}


export default Checkbox;


Checkbox.propTypes = {
  id       : PropTypes.string,
  value    : PropTypes.string,
  label    : PropTypes.string,
  checked  : PropTypes.bool,
  disabled : PropTypes.bool
};
