import React, { PropTypes } from 'react';


const RadioCheckGroup = (props) =>  (
        <fieldset className="pe-fieldset">
          <legend className="pe-legend">{props.legendText}</legend>
          {props.options.map((b, i) => {
            return (
                  <div key={`${props.name}-${b}-${i}`} className="pe-radio">
                    <input type={props.inputType} name={props.name} id={`${props.name}-${b}-${i}`} checked={props.selectedOptions.indexOf(b) > -1} onChange={props.changeHandler}/>
                    <label htmlFor={b}>{b}</label>
                    <span>
                      <svg
                        aria-hidden = "true"
                        focusable   = "false"
                        className   = {props.inputType==='radio'?"pe-icon--radio-dot":"pe-icon--sm-check-18"}
                        >
                        <use xlinkHref={props.inputType==='radio'?"#new-notification-9":"#sm-check-18" }></use>
                      </svg>
                    </span>
                  </div>
                )
            })
          }
        </fieldset>
    )


export default RadioCheckGroup;


RadioCheckGroup.propTypes = {
  id            : PropTypes.string,
  legendText    : PropTypes.string,
  options       : PropTypes.array,
  inputType     : PropTypes.oneOf(['checkbox', 'radio']),
  changeHandler : PropTypes.func,
  selectedOptions : PropTypes.array
};
