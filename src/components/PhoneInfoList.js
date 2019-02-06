import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    //App.js에서 전달받은 this.props에서 data 가져오기
    const {data} = this.props;
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info}></PhoneInfo>)
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}
