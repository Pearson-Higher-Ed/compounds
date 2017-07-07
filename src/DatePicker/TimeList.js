import { Icon } from "../../index";
import './TimeList.scss';

const HOURS = ["1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"];
const TWENTYFOUR_HOURS = ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"];


export const TimeList = (props) => {

  const { id, twentyFourHour, timeToParent, selectedHour } = props;

  const hoursToList = twentyFourHour ? TWENTYFOUR_HOURS : HOURS;

  return (
    <ul className="pe-timepicker-list">
      {
        hoursToList.map((hour,i) =>
        <li key={`timeList-${id}-item-${i}`} className="pe-timepicker-list-item-hour" onClick={() => timeToParent(hour)} >
          {selectedHour === hour && <Icon name="check-sm-18" />}
          {hour}
        </li>)
      }
    </ul>
  )
}
