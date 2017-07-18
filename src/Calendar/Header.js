import React, { Component } from 'react';
import Icon from '../Icon';

export default class Header extends Component {
  render() {
    return (
      <div className="pe-cal-row pe-cal-header">
        <div className="pe-cal-cell pe-cal-title pe-title--small">
          {this.props.monthNames[this.props.month]}
          <span className="fake-title-space" />
          {this.props.year}
        </div>
        <button className="pe-cal-cell pe-arrowIcons pe-icon--btn"
                onClick={this.props.onPrev.bind(this)}
                type="button"
                aria-label="Prev month"
        >
          <span className="icon-wrapper">
            <Icon name="chevron-back-18" />
          </span>
        </button>
        <button className="pe-cal-cell pe-arrowIcons pe-icon--btn"
                onClick={this.props.onNext.bind(this)}
                type="button"
                aria-label="Next month"
        >
          <span className="icon-wrapper">
            <Icon name="chevron-next-18" />
          </span>
        </button>
      </div>
    );
  }
};
