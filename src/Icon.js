import React, { PropTypes } from 'react';
import uuid                 from 'uuid'; 

const Icon = (props) => {

  const icon_class = 'pe-icon--' + props.name;

  if (props.children) {
    const i_id = '_'+uuid.v1();

    return(
      <svg version = "1.1"
           xmlns = "http://www.w3.org/2000/svg"
           xmlnsXlink = "http://www.w3.org/1999/xlink"
           role = "img"
           aria-labelledby = {i_id}
           className = {icon_class}>
        <title id = {i_id}>{props.children}</title>
        <use xlinkHref = {'#' + props.name}></use>
      </svg>
    );
  }
  else {
    return(
      <svg version = "1.1"
           xmlns = "http://www.w3.org/2000/svg"
           xmlnsXlink = "http://www.w3.org/1999/xlink"
           aria-hidden = "true"
           className = {icon_class}>
        <use xlinkHref = {'#' + props.name}></use>
      </svg>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  children: React.PropTypes.string
};

export default Icon;
