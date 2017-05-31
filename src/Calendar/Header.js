import React, { Component } from 'react';
import Icon from '../Icon';

export default class Header extends Component {
  render() {
    return (
      <div className="r-row r-head">
        <div className="r-cell r-title">
          {this.props.monthNames[this.props.month]}
          {this.props.year}
        </div>
        <div className="r-cell r-icons"
          onClick={this.props.onPrev.bind(this)}
          role="button"
          tabIndex="0">
          <Icon name="chevron-back-18" />
        </div>
        <div className="r-cell r-icons"
          onClick={this.props.onNext.bind(this)}
          role="button"
          tabIndex="0">
          <Icon name="chevron-next-18" />
        </div>
      </div>
    );
  }
};
