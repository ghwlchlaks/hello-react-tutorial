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
  
  state = {
    // 수정 버튼을 눌렀을때 editing값 true 
    // true일때 textbox -> input 형태로 수정가능하게 바뀜
    editing: false,
    // input 동적 값들
    name: '',
    phone: '',
  }
  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
    // 수정 혹은 적용 버튼 눌렀을경우 editing 값 토글
    const {editing} = this.state;
    this.setState({
      editing: !editing
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    //editing 값이 토글될때 처리할 로직
    // 컴포넌트에서 render()를 호출하고 난 다음에 발생하는 이벤트
    // 수정을 눌렀을땐, 기존의 값이 input값에 저장되게 state값을 수정
    // 수정을 적용할땐, input의 값들을 부모 컴포넌트로 전달

    // 부모 컴포넌트에서 전달받은 props에 {info, onUpdate} 데이터를 저장
    const {info, onUpdate} = this.props;
    // false에서 true로 변할떄 , 수정 버튼을 눌렀을떄
    if(!prevState.editing && this.state.editing) {
      // info데이터를 name phone에 할당하여 input 값에 초기값으로 출력하게함
      // 즉 this.props에서 전달받은 값은 수정버튼을 누르기전 데이터
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }

    // true에서 false로 변할때 , 적용 버튼 눌렀을때
    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        // 변화한 state의 값들을 할당하여 onUpdate함수를 호출하여 부모컴포넌트에 데이터를 변경
        // 즉 state는 변화한 최종값 
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    
    const {
      name, phone
    } = this.props.info
    
    const { editing } = this.state;
  
    // 수정 모드
    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="전화번호"
              onChange={this.handleChange}
            ></input>
            <button onClick={this.handleToggleEdit}>적용</button>
            <button onClick={this.handleRemove}>삭제</button>
          </div>
        </div>
      )
    }
    // 일반 모드
    else {
      return (
        <div style={style}>
          <div><b>{name}</b></div>
          <div>{phone}</div>
          <button onClick={this.handleToggleEdit}>수정</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      )
    }
  }
}
