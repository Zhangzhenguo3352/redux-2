import React,{ Component } from 'react'
import Radium from 'radium'
import Courses from './Courses'

 class Main extends Component{
  render(){
    let styles = {
      roots:{
        fontFamily: 'sans-serif'
      },
      header:{
        backgroundColor:'#00bcd4',
        height:'8.4rem',
        textAlign:'center',

      },
      content:{
        lineHeight:'8.4rem',
        fontSize:'1.4rem',
        color:'#fff'
      }
    }
    return(
      <div style={styles.roots}>
        <header style={styles.header}>
          <div style={styles.content}>头部</div>
        </header>
        <Courses/>
      </div>
    )
  }
}
export default Radium(Main)
