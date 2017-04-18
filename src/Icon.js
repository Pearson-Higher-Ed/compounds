import React, { PropTypes } from 'react';
import uuid                 from 'uuid';


const Icon = (props) => {

  const icon_class = 'pe-icon--' + props.name;
  const i_id = '_'+uuid.v1();

  if (props.children) {
    return(
      <svg role = "img"
           focusable = "false"
           aria-labelledby = {i_id}
           className = {icon_class}>
        <title id = {i_id}>{props.children}</title>
        <use xlinkHref = {'#' + props.name}></use>
      </svg>
    );
  }
  else {
    return(
      <svg aria-hidden = "true"
           focusable = "false"
           className = {icon_class}>
        <use xlinkHref = {'#' + props.name}></use>
      </svg>
    );
  }
}


Icon.propTypes = {
  name     : PropTypes.string.isRequired,
  children : PropTypes.string
};



export default Icon;
