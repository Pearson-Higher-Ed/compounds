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
      iconName: 'sortable-18'
    }

    this.selectAll = _selectAll.bind(this);
    this.handleKeys = _handleKeys.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeys);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeys);
  }

  iconToggle = () => {
    const { iconName } = this.state;
    if (iconName === 'sortable-18') {
      this.setState({ iconName: 'sort-up-18' })
    } else if (iconName === 'sort-up-18') {
      this.setState({ iconName: 'sort-down-18' })
    } else if (iconName === 'sort-down-18') {
      this.setState({ iconName: 'sort-up-18' })
    }
  }

  render() {
    const { children, scope, inputId, containerId, inputLabel, columnSort } = this.props;
    const { selectable } = this.context;
    const { iconName } = this.state;

    return (
      <th aria-sort={
        iconName === 'sort-up-18'
        ? 'ascending'
        : iconName === 'sort-down-18'
        ? 'descending'
        : null }
      >
        {
          selectable && !children
            ? <div className="pe-checkbox"
                   id={containerId}
                   onClick={this.selectAll}
                   onKeyDown={this.handleKeys}>
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
            <button type="button" className="pe-icon--btn" onClick={this.iconToggle}>
              <Icon name={iconName} />
            </button>
        }
      </th>
    )
  }
}

TableHeaderCell.contextTypes = {
  selectable: PropTypes.bool
}

function _selectAll() {
  const checkboxes = document.getElementsByTagName('input');
  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkboxes[0].checked;
  }
}

function _handleKeys(e) {
  if (e.which === 32) {
    this.selectAll;
  }
}
