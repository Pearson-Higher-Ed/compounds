import React, { Component, PropTypes } from 'react';
import { Icon }                        from '../index.js'


const RadioButton = (props) =>  (
      <div>
        <div className="pe-radio">
          <input type="radio" name={props.name} id={props.id} />
          <label htmlFor={props.id}>{props.labelText}</label>
          <span>
            <Icon name="new-notification-9" />
          </span>
        </div>
      </div>
  )


export default RadioButton;


RadioButton.propTypes = {
  id    : PropTypes.string,
  name  : PropTypes.string,
  label : PropTypes.string
};
