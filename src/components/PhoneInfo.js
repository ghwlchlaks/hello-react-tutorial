import React, { Component } from 'react'

export default class PhoneInfo extends Component {
  // info의 값이 undefined으로 인해 component에러가 발생하지 않도록 
  // default값 설정
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      name, phone, id
    } = this.props.info

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </div>
    )
  }
}
