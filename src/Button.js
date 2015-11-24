import React, { PropTypes } from 'react';

const BUTTON_TYPES = {
  PRIMARY: 'primary',
  LINK: 'link'
};

const BUTTON_SIZES = {
  SMALL: 'small',
  LARGE: 'large'
};

function Button(props) {
  let classes = ['pe-btn'];

  if (props.type) {
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
