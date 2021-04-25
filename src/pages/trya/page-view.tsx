import React, { Component } from 'react';

class index extends Component {
  state = {
    a: 1
  }
  
  save = async () => {
   
    await new Promise<void>((res) => {
      res()
    })
    
    this.setState({
      a: 1
    })
    this.setState({
      a: 2
    })
    console.log(this.state);
   debugger 
  }

  render() {
    return (
      <div onClick={this.save}>
        点击
      </div>
    );
  }
}

export default index;