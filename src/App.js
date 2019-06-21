import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Products } from './containers/products';

class App extends Component {
  render() {
    console.log('hello');
    return (
      <div>
        Hello World!
        <Products />
      </div>
    );
  }
}

export default hot(App);