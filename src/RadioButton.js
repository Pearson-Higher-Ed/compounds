import React, { Component, PropTypes } from 'react';


class RadioButton extends Component {

  constructor() {
    super();
    this.state = {
      checked : false
    };
  }

  render() {

    const { id, name, labelText } = this.props;
    const { checked }             = this.state;

    return (
        <div onClick={() => this.setState({checked:!checked})}>
          <div className="pe-radio">
            <input type="radio" name={name} id={id} />
            <label htmlFor={id}>{labelText}</label>
            <span>
              {checked && <svg
                aria-hidden = "true"
                focusable   = "false"
                className   = "pe-icon--radio-dot">
                <use xlinkHref="#new-notification-9"></use>
              </svg>}
            </span>
          </div>
        </div>
    )
  }
}


export default RadioButton;


RadioButton.propTypes = {
  id    : PropTypes.string,
  name  : PropTypes.string,
  label : PropTypes.string
};
