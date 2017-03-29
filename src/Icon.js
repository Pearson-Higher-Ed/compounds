import React, { PropTypes } from 'react';
import uuid                 from 'uuid';


const Icon = (props) => {

  const { name, children } = props;

  const icon_class = 'pe-icon--' + name;

  const hidden   = (children) ? false         : true;
  const roleAttr = (children) ? "img"         : null;
  const i_id     = (children) ? '_'+uuid.v1() : null;


  return(
      <svg version         = "1.1"
           xmlns           = "http://www.w3.org/2000/svg"
           xmlnsXlink      = "http://www.w3.org/1999/xlink"
           focusable       = "false"
           role            = {roleAttr}
           aria-hidden     = {hidden}
           aria-labelledby = {i_id}
           className       = {icon_class}
           >
           {children && <title id={i_id}>{children}</title>}
        <use xlinkHref={'#' + name}></use>
      </svg>
    );
};


export default Icon;


Icon.propTypes = {
  name     : PropTypes.string.isRequired,
  children : PropTypes.string
};
