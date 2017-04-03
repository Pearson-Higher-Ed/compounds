import React, { PropTypes } from 'react';


const RadioCheckGroup = (props) =>  {

  const { legendText, options, name, inputType, selectedOptions, changeHandler } = props;



  return (
        <fieldset className="pe-fieldset">
          <legend className="pe-legend">{legendText}</legend>
          {Object.keys(options).map((b, i) => {
            return (
                  <div key={`${name}-${b}-${i}`} className="pe-radio">
                    <input id             = {`radiocheck-${name}-${b}-${i}`}
                           type           = {inputType}
                           name           = {name}
                           value          = {b}
                           disabled       = {options[b].includes('disabled')}
                           defaultChecked = {selectedOptions.indexOf(b) > -1}
                           readOnly       = {options[b].includes('readonly')}
                           onChange       = {changeHandler}
                           />
                    <label htmlFor={`radiocheck-${name}-${b}-${i}`}>{b}</label>
                    <span>
                      <svg
                        aria-hidden = "true"
                        focusable   = "false"
                        className   = {inputType==='radio'?"pe-icon--radio-dot":"pe-icon--sm-check-18"}
                        >
                        <use xlinkHref={inputType==='radio'?"#new-notification-9":"#sm-check-18" }></use>
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
  id              : PropTypes.string,
  legendText      : PropTypes.string,
  options         : PropTypes.object,
  inputType       : PropTypes.oneOf(['checkbox', 'radio']),
  changeHandler   : PropTypes.func,
  selectedOptions : PropTypes.array
};
