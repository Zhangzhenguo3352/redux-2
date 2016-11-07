import React,{ Component } from 'react'
import Radium,{ StyleRoot } from 'radium'
import Courses from './Courses'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

 class Main extends Component{
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

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
      <StyleRoot style={styles.roots}>
        <header style={styles.header}>
          <div style={styles.content}>头部</div>
        </header>
        <Courses/>
      </StyleRoot>
    )
  }
}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Radium(Main)











