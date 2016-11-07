import React ,{Component } from 'react'
import { F399,F9f0 } from './colors2'

class Center extends Component{
  constructor(props){
    super(props);
    this.state = { initNumber:0 };
    this.interval = setInterval(() => this.tick(),1000)
  }

  tick(){
    this.setState({
      initNumber:this.state.initNumber + this.props.incentent
    })
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return(
      <div style={{color:this.props.colors}}>
        center:({this.props.incentent}):{this.state.initNumber}
      </div>
    )
  }
}

export class App2 extends Component{
  render(){
    return(
      <div>
        <Center incentent={1} colors={F399}/>
        <Center incentent={5} colors={F9f0}/>
      </div>
    )
  }
}
