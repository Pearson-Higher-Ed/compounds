import { Component } from 'react';
import addHandleClickOutside from './extensions/addHandleClickOutside';

class TestClickOutside extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickOutside(event) {
    this.setState({ clicked: false });
  }

  handleClick(event) {
    this.setState({ clicked: true });
  }

  getStyles() {
    return {
      outer: {
        padding: '5px',
        border: 'solid 1px #000',
        marginBottom: '15px'
      },
      inner: {
        cursor: 'pointer',
        color: '#ccc',
        padding: '5px',
        border: 'solid 1px #ccc'
      },
      clicked: {
        color: 'green'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const clicked = this.state.clicked;

    return (
      <div style={styles.outer}>
        I am the root. Click outside of me to reset.
        <div style={styles.inner} onClick={this.handleClick}>
          <span style={clicked ? styles.clicked : {}}>I am nested. Click me.</span>
        </div>
      </div>
    );
  }
}

export default addHandleClickOutside(TestClickOutside);
