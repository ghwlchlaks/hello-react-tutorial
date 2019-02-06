import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  state = {
    array : []
  }

  handleCreate = (data) => {
    console.log(data);
    this.setState((state) => {
      state.array.push(data);
    })
  }
  render() {
    return (
      <div className="App">
        <PhoneForm
          onCreate={this.handleCreate} // onCreate는 자식에게 전달한 props 해당 props에 함수 할당
        >
        </PhoneForm>
      </div>
    );
  }
}

export default App;