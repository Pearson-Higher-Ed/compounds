import React from 'react';


const Button = (props) => {

  const { btnType, btnSize, ...rest } = props;
  const classes = generateClassName(btnType, btnSize);

  return <button className={classes} {...rest}>{props.children}</button>;
};

export default Button;




const generateClassName = (btnType, btnSize) => {

  let className;

  if (!btnType) {
    if (!btnSize) {
      className = `pe-btn`;
    }
    if (btnSize) {
      className = `pe-btn--btn_${btnSize}`;
    }
  };

  if (btnType) {
    if (!btnSize) {
      className = `pe-btn__${btnType}`;
    }
    if (btnSize) {
      className = `pe-btn__${btnType}--btn_${btnSize}`;
    }
  };

  return className;
}
