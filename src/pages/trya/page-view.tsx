import React, { Component } from 'react';


class Child extends Component<any, any>{

  componentWillReceiveProps(nextProps: any){
    console.log(this.props, nextProps);
    console.log(this.props.onClick === nextProps.onClick);
  }

  render(){
    return (
      <div>
        点击2
      </div>
    )
  }
}
class index extends Component {
  state = {
    a: 1
  }
  
  save = async () => {
   
    await new Promise<void>((res) => {
      res()
    })
    
    // this.setState({
    //   a: 1
    // })
    this.setState({
      a: 2
    })
  }

  trya = (a: any) => ()=>{
    console.log(a);
    
  }
  render() {
    let { a } = this.state
    return (
      <div onClick={this.save}>
        点击
        <Child a={a} onClick={this.trya(a)}></Child>
      </div>
    );
  }
}

export default index;