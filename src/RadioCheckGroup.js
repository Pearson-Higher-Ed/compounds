import React, { PropTypes } from 'react';


const RadioCheckGroup = (props) => {

    const { id, inputType, name, legendText, options, checked, changeHandler, selectedOptions } = props;

    return (
        <fieldset className="pe-fieldset">
          <legend className="pe-legend">{legendText}</legend>
          {options.map((b, i) => {
            return (<div key={i} className="pe-radio">
              <input type={inputType} name={name} id={`${name}-${b}-${i}`} checked={selectedOptions.indexOf(b) > -1} onChange={changeHandler}/>
              <label htmlFor={b}>{b}</label>
              <span>
                <svg
                  aria-hidden = "true"
                  focusable   = "false"
                  className   = {inputType==='radio'?"pe-icon--radio-dot":"pe-icon--sm-check-18"}
                  >
                  <use xlinkHref={inputType==='radio'?"#new-notification-9":"#sm-check-18"}></use>
                </svg>
              </span>
            </div>)
            })
          }
        </fieldset>
    )
}


export default RadioCheckGroup;


RadioCheckGroup.propTypes = {
  id         : PropTypes.string,
  legendText : PropTypes.string,
  options    : PropTypes.array,
  inputType  : PropTypes.oneOf(['checkbox', 'radio'])
};
