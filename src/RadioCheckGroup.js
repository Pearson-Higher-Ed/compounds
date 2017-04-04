import React, { PropTypes } from 'react';


const RadioCheckGroup = (props) => {

  const { legendText, options, name, inputType, selectedOptions, changeHandler } = props;


  return (
        <fieldset className="pe-fieldset">
          <legend className="pe-legend">{legendText}</legend>
          {Object.keys(options).map((opt, i) => {
            return (
                  <div key={`${name}-${opt}-${i}`} className={(inputType === 'radio')?"pe-radio":"pe-checkbox"}>
                    <input id       = {`radiocheck-${name}-${opt}-${i}`}
                           type     = {inputType}
                           name     = {name}
                           value    = {opt}
                           checked  = {selectedOptions.indexOf(opt) > -1}
                           disabled = {options[opt].includes('disabled')}
                           readOnly = {options[opt].includes('readonly')}
                           onChange = {changeHandler}
                           />
                    <label htmlFor={`radiocheck-${name}-${opt}-${i}`}>{opt}</label>
                    <span>
                      <svg
                        aria-hidden = "true"
                        focusable   = "false"
                        className   = {inputType==='radio'?"pe-icon--radio-dot":"pe-icon--check-sm-18"}
                        >
                        <use xlinkHref={inputType==='radio'?"#new-notification-9":"#check-sm-18" }></use>
                      </svg>
                    </span>
                  </div>
                )
            })
          }
        </fieldset>
    )
  }


export default RadioCheckGroup;


RadioCheckGroup.propTypes = {
  id              : PropTypes.string.isRequired,
  legendText      : PropTypes.string.isRequired,
  options         : PropTypes.object.isRequired,
  inputType       : PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  changeHandler   : PropTypes.func.isRequired,
  selectedOptions : PropTypes.array
};
