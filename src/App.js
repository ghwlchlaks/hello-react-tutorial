import React, { Component, Fragment } from 'react';
import './App.css';

import Name from './Name';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Name name="test"></Name>
        <Counter></Counter>
      </Fragment>
    );
  }
}

export default App;
