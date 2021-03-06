import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  static PropTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input without touching the DOM
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);

  };

  render() {
    return (
      <from className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={gotFunName()}
        />
        <button type="submit">Visit Store</button>
      </from>
    );
  }
}



export default StorePicker;