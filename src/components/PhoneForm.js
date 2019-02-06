import React, { Component } from 'react'

export default class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      // name= e.target.name , value= e.targe.value
      [name]: value
      //이벤트가 발생한 target의 name속성으로 조회하여 이벤트가 발생한 value의 state값을 변경
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지 
    e.preventDefault();
    // 상태 값을 onCreate를 통하여 부모에게 전달 
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        placeholder="이름"
        value={this.state.name} // state값과 바인딩
        onChange={this.handleChange} //input text의 value값이 변할때 발생한다.
        name="name"
        >
        </input>

        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        >
        </input>
        <div>{this.state.name} {this.state.phone}</div> 
        {/* handleChange로 변하는 name의 값을 동적으로 가져온다.*/}

        <button type="submit">등록</button>
      </form>
    )
  }
}
