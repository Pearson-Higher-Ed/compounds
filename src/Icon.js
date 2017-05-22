import React     from 'react';
import PropTypes from 'prop-types';
import uuid      from 'uuid';


const Icon = (props) => {

  const { name, children } = props;

  const icon_class = 'pe-icon--' + name;
  const hidden     = (children) ? false         : true;
  const roleAttr   = (children) ? 'img'         : null;
  const i_id       = (children) ? '_'+uuid.v1() : null;


  return(
      <svg focusable       = "false"
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
