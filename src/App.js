import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from "./Inventory";
import sampleFishes from "./sample-fishes";




class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };


  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }




  export default App;
