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
      position: ''
    }
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  }

  componentDidMount() {
    if (document.body.scrollHeight > window.innerHeight * 1.25) {
      this.setState({ position: '--sticky'})
    }
  }

  render() {

    const { position } = this.state;
    const { type, title, message } = this.props;
    const infoCheck = type === 'Information' ? 'info' :'';

    return (
      <div>
        { this.state.isOpen &&
          <div className={`pe-alert${position} alert-${type}`}>
            <button className="close-title"
                    onClick={this.handleClose}
                    aria-label="Close alert">
              <Icon name="remove-sm-24" />
            </button><br/>

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
    )
  }
}
