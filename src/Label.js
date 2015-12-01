import React, { PropTypes } from 'react';

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

  if (props.type) {
    className = className.concat([`pe-label--${props.type}`]);
  }

  if (props.size) {
    className = className.concat([`pe-label--${props.size}`]);
  }

  if (props.weight) {
    className = className.concat([`pe-label--${props.weight}`]);
  }

  if (props.inverse) {
    className = className.concat(['pe-label--inverse']);
  }

  // If props.children is a string, render the label as a div,
  // otherwise use a clone of the provided element as the root.
  if (typeof props.children === HTMLElement) {
    return React.cloneElement(
      props.children,
      { className: className.join(' ') }
    );
  } else {
    return (
      <span className={className.join(' ')} {...props}>
        {props.children}
      </span>
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
