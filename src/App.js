import React, { Component, Fragment } from 'react';
import './App.css';

import Name from './Name';
import Counter from './Counter';

const Problem = () => {
  throw (new Error('bug'));
  return (
    <div>

    </div>
  )
}

class App extends Component {
  state = {
    error: false
  }
  render() {
    if (this.state.error) return (<h1>자식 컴포넌트에서 에러 발생!</h1>)
    return (
      <Fragment>
        <Problem></Problem>
        <Name name="test"></Name>
        <Counter></Counter>
      </Fragment>
    );
  }
  componentDidCatch(error, info) {
    this.setState({
      error: true
    })
  }
}

export default App;
