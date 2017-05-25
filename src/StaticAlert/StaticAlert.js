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
      isOpen: true,
      display: 'block'
    }
  }

  handleClose = () => {
    this.setState({
      isOpen: false,
      opacity: 0
    });
  }

  render() {

    const { type, title, message } = this.props;
    const infoCheck = type === 'Information' ? 'info' :'';

    return (
      <div className="alertList">
        <div className={`pe-alert alert-${type}`}>
          {this.state.isOpen &&
            <div opacity={this.state.opacity}
                 className="pe-alert">

              <button className="close-title"
                      onClick={this.handleClose}
                      aria-label="Close alert">
                <Icon name="remove-sm-24" />
              </button>

              <div className="alert-content-container">
                {type === 'Error' ? <span className="error-svg">
                                      <svg focusable="false"
                                           className="pe-icon--warning-24">
                                           <use xlinkHref="#warning-24"></use>
                                      </svg>
                                    </span>
                                  :null}
                {type === 'Success' ? <span className="success-svg">
                                        <svg focusable="false"
                                             className="pe-icon--check-24">
                                             <use xlinkHref="#check-sm-24"></use>
                                        </svg>
                                      </span>
                                    :null}
                <div className={`alert-content-${infoCheck}`}>
                  <h4 className="pe-label alert-title">
                    <strong>{title}</strong>
                  </h4>
                  <p className="pe-paragraph alert-text">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
