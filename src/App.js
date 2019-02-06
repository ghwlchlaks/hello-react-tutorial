import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'name0',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: 'name1',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }
  render() {
    return (
      <div className="App">
        <PhoneForm
          onCreate={this.handleCreate} // onCreate는 자식에게 전달한 props 해당 props에 함수 할당
        >
        </PhoneForm>
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;