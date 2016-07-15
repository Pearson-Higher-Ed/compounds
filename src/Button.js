import React, { PropTypes } from 'react';

const BUTTON_TYPES = {
  PRIMARY: 'primary',
  LINK: 'link',
  SUBMIT: 'submit'
};

const BUTTON_SIZES = {
  SMALL: 'small',
  LARGE: 'large'
};

function Button(props) {
  eventHarness()
  let classes = ['pe-btn'];

  if (props.type) {

    // Handle IE overriding element type
    if (props.type === BUTTON_TYPES.SUBMIT) {
      props.type = BUTTON_TYPES.PRIMARY;
    }

    classes = classes.concat([`pe-btn--${props.type}`]);
  }

  if (props.size) {
    classes = classes.concat([`pe-btn--${props.size}`]);
  }

  return <button className={classes.join(' ')} {...props}>{props.children}</button>;
}

Button.BUTTON_TYPES = BUTTON_TYPES;
Button.BUTTON_SIZES = BUTTON_SIZES;

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(BUTTON_TYPES).map(k => k.toLowerCase())),
  size: PropTypes.oneOf(Object.keys(BUTTON_SIZES).map(k => k.toLowerCase()))
};

export default Button;

let eventHarness = () => document.body.addEventListener('o.initButton', e => new Button(e.detail))
