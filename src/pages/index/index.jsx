import './index.less'
import React,{ Component } from 'react';
function Header(props){
  function handlerClick(){
    console.log(123213)
  }
  return (
      <div className='header'>
        <div className="tab" onClick={handlerClick}>{props.title}</div>
      </div>
    )
}


class Index extends Component{
  state = {login: '2133'};
   
  handleClick = (e)=> {
    this.setState({
      login:'你好'
    })
  }
  render(){
    return (
      <div className="block-wrap">
        <Header title={this.state.login} ></Header>
        <div className="block-da" onClick={this.handleClick}>3213</div>
      </div>
    )
  }
}

export default Index