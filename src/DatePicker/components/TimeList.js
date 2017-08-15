import React    from 'react';
import { Icon } from "../../../index";

import './TimeList.scss';


export const TimeList = (props) => {

    const { id, hoursToList, timeToParent, selectedHour, timeListRef, listEvents } = props;

    return (
      <ul id="timelist" className="pe-timepicker-list" ref={timeListRef} onKeyUp={listEvents} role="listbox" aria-expanded="true" aria-live="polite">
        {
          hoursToList.map((hour,i) =>
            <li key           = {`${id}-item-${i}`}
                id            = {`${id}-item-${i}`}
                className     = "pe-timepicker-list-item-hour"
                role          = "option"
                tabIndex      = "-1"
                aria-selected = {hour === selectedHour}
                onClick       = {timeToParent}
              >
              {selectedHour === hour && <Icon name="check-sm-18" />}
              {hour}
            </li>)
        }
      </ul>
    )
}
