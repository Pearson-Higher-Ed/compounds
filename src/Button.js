import React, { PropTypes } from 'react';


const Button = (props) => {

  const { btnType, btnSize, ...rest } = props;

  let classes;

  if (!btnType) {
    if (!btnSize) {
      classes = `pe-btn`;
    } else {
      classes = `pe-btn--btn_${btnSize}`;
    }
  };

  if (btnType) {
    if (!btnSize) {
      classes = `pe-btn__${btnType}`;
    } else {
      classes = `pe-btn__${btnType}--btn_${btnSize}`;
    }
  };

  return <button className={classes} {...rest}>{props.children}</button>;
};


export default Button;

Button.propTypes = {
  btnType: PropTypes.string,
  btnSize: PropTypes.string
};
