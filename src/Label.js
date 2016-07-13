import React, { PropTypes } from 'react';

// jsdom for eventharness**
import jsdom from 'jsdom';
global.document = jsdom.jsdom('');
global.window = document.defaultView;
document.body.addEventListener('o.initLabel', e => new Label(e.detail))
// *************************

const LABEL_TYPES = {
  SECONDARY: 'secondary'
};

const LABEL_SIZES = {
  SMALL: 'small',
  LARGE: 'large'
};

const LABEL_WEIGHTS = {
  BOLD: 'bold'
};

function Label(props) {
  let className = ['pe-label'];

  const { type, size, weight, inverse, ...other } = props;

  if (type) {
    className = className.concat([`pe-label--${type}`]);
  }

  if (size) {
    className = className.concat([`pe-label--${size}`]);
  }

  if (weight) {
    className = className.concat([`pe-label--${weight}`]);
  }

  if (inverse) {
    className = className.concat(['pe-label--inverse']);
  }

  // If props.children is a string, render the label as a div,
  // otherwise use a clone of the provided element as the root.
  if (typeof props.children === 'undefined' || typeof props.children === 'string') {
    return (
      <span className={className.join(' ')} {...other}>
        {props.children}
      </span>
    );
  } else {
    return React.cloneElement(
      props.children,
      { className: className.join(' ') }
    );
  }

}

Label.LABEL_TYPES = LABEL_TYPES;
Label.LABEL_SIZES = LABEL_SIZES;
Label.LABEL_WEIGHTS = LABEL_WEIGHTS;

Label.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  type: PropTypes.oneOf(Object.keys(LABEL_TYPES).map(k => k.toLowerCase())),
  size: PropTypes.oneOf(Object.keys(LABEL_SIZES).map(k => k.toLowerCase())),
  weight: PropTypes.oneOf(Object.keys(LABEL_WEIGHTS).map(k => k.toLowerCase())),
  inverse: PropTypes.bool
};

export default Label;
