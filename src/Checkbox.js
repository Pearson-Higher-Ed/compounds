import React    from 'react';
import { Icon } from '../Compounds';


const Checkbox = (props) => (
  <div className="pe-checkbox">
      <input type="checkbox"  id={`checkboxInput-${props.label}`} value={props.value} />
      <label htmlFor={`checkboxInput-${props.label}`}>{props.label}</label>
      <span>
        <Icon name={`sm-check-${props.size}`} />
      </span>
    </div>
)

export default Checkbox;
