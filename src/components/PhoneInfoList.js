import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
  }

  render() {
    //App.js에서 전달받은 this.props에서 data 가져오기
    const {data, onRemove, onUpdate} = this.props;
    const list = data.map(
      info => (<PhoneInfo 
        key={info.id}
        info={info} 
        onRemove={onRemove}
        onUpdate={onUpdate}
        >
        </PhoneInfo>)
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}
