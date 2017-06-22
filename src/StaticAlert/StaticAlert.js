import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './StaticAlert.scss';

export default class StaticAlert extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: true
    }
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  render() {

    const { type, title, message } = this.props;
    const infoCheck = type === 'Information' ? 'info' :'';

    return (
      <div>
        {this.state.isOpen &&
          <div className={`pe-alert alert-${type}`}>
            <button className="pe-icon--btn close-title"
                    onClick={this.handleClose}
                    aria-label="Close alert">
              <Icon name="remove-sm-24" />
            </button><br/>

            <div className="alert-content-container">
              {type === 'Error' ? <span className="error-svg">
                                    <svg focusable="false"
                                         className="pe-icon--warning-18">
                                         <use xlinkHref="#warning-18"></use>
                                    </svg>
                                  </span>
                                :null}
              {type === 'Success' ? <span className="success-svg">
                                      <svg focusable="false"
                                           className="pe-icon--check-18">
                                           <use xlinkHref="#check-sm-18"></use>
                                      </svg>
                                    </span>
                                  :null}
              <div className={`alert-content-${infoCheck}`}>
                <h2 className="pe-label alert-title">
                  <strong>{title}</strong>
                </h2>
                <p className="pe-paragraph alert-text">
                  {message}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
