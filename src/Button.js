import React from 'react';


const Button = (props) => {

  let classes = ['pe-btn'];

  if (props.btntype) {
    classes = classes.concat([`pe-btn__${props.btntype}`]);
  }
  if (props.btnsize) {
    classes = classes.concat([`pe-btn--btn_${props.btnsize}`]);
  }

  return <button className={classes.join(' ')} {...props}>{props.children}</button>;
};

export default Button;
