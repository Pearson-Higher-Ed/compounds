import React, { PropTypes } from 'react';
import uuid                 from 'uuid';


const Icon = (props) => {

  const { name, children } = props;

  const icon_class = 'pe-icon--' + name;

  let i_id     = '';
  let titleTag = null;
  let hidden   = true;
  let roleAttr = "";

  if (children) {
    i_id     = '_'+uuid.v1();
    titleTag = <title id={i_id}>{children}</title>;
    hidden   = false;
    roleAttr = "img";
  }

  return(
      <svg version         = "1.1"
           xmlns           = "http://www.w3.org/2000/svg"
           xmlnsXlink      = "http://www.w3.org/1999/xlink"
           role            = {roleAttr}
           focusable       = "false"
           aria-hidden     = {hidden}
           aria-labelledby = {i_id}
           className       = {icon_class}
           >
           {titleTag}
        <use xlinkHref     = {'#' + name}></use>
      </svg>
    );
}


Icon.propTypes = {
  name     : PropTypes.string.isRequired,
  children : PropTypes.string
};



export default Icon;
