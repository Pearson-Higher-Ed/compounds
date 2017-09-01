import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

export default class TableHeaderCell extends Component {

  static propTypes = {
    children: PropTypes.node,
    scope: PropTypes.string,
    inputId: PropTypes.string,
    containerId: PropTypes.string,
    inputLabel: PropTypes.string,
    columnSort: PropTypes.bool
  }

  static defaultProps = {
    scope: 'col',
    columnSort: false
  }

  constructor(props) {
    super(props)

    this.state = {
      placeholder: 'check-sm-18'
    }
  }

  onClick = () => {
    const { placeholder } = this.state;
    if (placeholder === 'check-sm-18') {
      this.setState({ placeholder: 'sort-up-18' })
    } else if (placeholder === 'sort-up-18') {
      this.setState({ placeholder: 'sort-down-18' })
    } else if (placeholder === 'sort-down-18') {
      this.setState({ placeholder: 'sort-up-18' })
    }
  }

  render() {
    const { children, scope, inputId, containerId, inputLabel, columnSort } = this.props;
    const { table, selectable } = this.context;
    const { placeholder } = this.state;

    return (
      <th>
        {
          selectable && !children
            ?  <div className="pe-checkbox" id={containerId}>
                 <input type="checkbox" id={inputId} />
                 <label htmlFor={inputId}>{inputLabel}</label>
                 <span>
                   <Icon name="check-sm-18" />
                 </span>
               </div>
            : children
        }
        {
          columnSort &&
            <button type="button" className="pe-icon--btn" onClick={this.onClick}>
              <Icon name={placeholder} />
            </button>
        }
      </th>
    )
  }
}

TableHeaderCell.contextTypes = {
  table: PropTypes.object,
  selectable: PropTypes.bool
}
