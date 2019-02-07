import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 다음 받아올 data가 현재 데이터와 같다면 렌더링을 하지 않는다.
    // 리스트 데이터를 의미하는 data가 변하지 않으면 다른 데이터의 변화로 해당 컴포넌트가 리렌더링되지 않는다.
    // true = 렌더링 , false= 렌더링 x
    return nextProps.data !== this.props.data;
  }

  render() {
    //App.js에서 전달받은 this.props에서 data 가져오기
    const {data, onRemove, onUpdate} = this.props;
    const list = data.map(
      info => (
      <PhoneInfo 
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
