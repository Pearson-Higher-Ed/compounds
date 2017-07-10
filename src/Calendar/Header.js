import React, { Component } from 'react';
import Icon from '../Icon';

export default class Header extends Component {
  render() {
    return (
      <div className="r-row r-head">
        <div className="r-cell r-title pe-title--small">
          {this.props.monthNames[this.props.month]}
          {this.props.year}
        </div>
        <div className="r-cell r-icons"
             onClick={this.props.onPrev.bind(this)}
        >
          <span className="icon-wrapper">
            <Icon name="chevron-back-18" />
          </span>
        </div>
        <div className="r-cell r-icons"
             onClick={this.props.onNext.bind(this)}
        >
          <span className="icon-wrapper">
            <Icon name="chevron-next-18" />
          </span>
        </div>
      </div>
    );
  }
};
