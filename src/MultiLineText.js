import React, { PropTypes } from 'react';


const MultiLineText = (props) => {

    const { id, labelText, placeholder } = props;

    return (
      <div>
        <label className="pe-textLabelInput__label" htmlFor={id}>{labelText}</label>
        <textarea className="pe-multiLineText" id={id} cols="30" rows="5" placeholder={placeholder}></textarea>
      </div>
    )

};


export default MultiLineText;


MultiLineText.propTypes = {
  id          : PropTypes.string,
  labelText   : PropTypes.string,
  placeholder : PropTypes.string
};
