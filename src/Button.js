import React from 'react';


const Button = (props) => {

  const { btnType, btnSize, ...rest } = props;

  let classes = [];

  // Buttons *either* have a type *or* pe-btn.
  // Except when they don't.
  classes = (props.btnType) ?
            classes.concat([`pe-btn__${props.btnType}`]) :
            classes.concat([`pe-btn`]);

  if (props.btnSize) {
    classes = classes.concat([`pe-btn--btn_${props.btnSize}`]);
  }

  return <button className={classes.join(' ')} {...rest}>{props.children}</button>;
};

export default Button;
