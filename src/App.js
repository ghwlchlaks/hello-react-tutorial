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
      // 이어쓰기
      information: information.concat({id: this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      // 조건에 맞는 id를 필터링해서 보여줌
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        (info) => id === info.id
        //덮어쓰기
        ? { ...info, ...data}
        //아이디가 다르다면 기존 정보
        : info
        )
    })
  }
  render() {
    return (
      <div className="App">
        <PhoneForm
          onCreate={this.handleCreate} // onCreate는 자식에게 전달한 props 해당 props에 함수 할당
        >
        </PhoneForm>
        <PhoneInfoList 
          data={this.state.information} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          />
      </div>
    );
  }
}

export default App;