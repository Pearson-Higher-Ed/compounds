import React, { PropTypes } from 'react';


const Button = (props) => {

  const { btnType, btnSize, className, ...rest } = props;

  let classes;

  if (!btnType) {
    classes = (!btnSize) ? `pe-btn` : `pe-btn--btn_${btnSize}`;
  };

  if (btnType) {
    classes = (!btnSize) ? `pe-btn__${btnType}` : `pe-btn__${btnType}--btn_${btnSize}`;
  };

  if (className) {
     classes = classes.concat(` ${className} `);
  };


  return <button className={classes} {...rest}>{props.children}</button>;

};


export default Button;


Button.propTypes = {
  btnType: PropTypes.string,
  btnSize: PropTypes.string
};
