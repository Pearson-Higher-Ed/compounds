import React, { Component } from 'react';
import Icon from '../Icon';

export default class Header extends Component {

  render() {
    const { onPrev, onNext, month, year, monthNames, contrast } = this.props;
    const colorSwap = contrast ? 'inverse-title' :null;
    const iconSwap = contrast ? 'inverse-buttons' :null;

    return (
      <div className="pe-cal-row pe-cal-header">
        <div className={`pe-cal-cell pe-cal-title pe-title--small ${colorSwap}`}
             id="pe-cal-month"
        >
               {monthNames[month]}
               <span className="fake-title-space" />
               {year}
        </div>
        <button className="pe-cal-cell pe-arrowIcons pe-icon--btn"
                onClick={onPrev.bind(this)}
                type="button"
                aria-label="Prev month"
        >
          <span className={`icon-wrapper ${iconSwap}`}>
            <Icon name="chevron-back-18" />
          </span>
        </button>
        <button className="pe-cal-cell pe-arrowIcons pe-icon--btn"
                onClick={onNext.bind(this)}
                type="button"
                aria-label="Next month"
        >
          <span className={`icon-wrapper ${iconSwap}`}>
            <Icon name="chevron-next-18" />
          </span>
        </button>
      </div>
    );
  }
};
