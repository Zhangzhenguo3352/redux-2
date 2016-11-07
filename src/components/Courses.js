import React ,{Component} from 'react'
import Radium from 'radium'
import Date from '../data/data'
import Course from './Course'

class Courses extends Component{
  render(){
    let styles={
      roots:{
        maxWidth:'1200px',
        margin:'0 auto',
        paddingTop:'6rem',
        paddingBottom:'6rem',
        display:'flex',
        flexWrap:'wrap'
      }
    }
    return(
      <div style={styles.roots}>
       
        {Date.map((item,i) => <Course key={i} course={item}/>)}

      </div>
    )
  }
}
export default Radium(Courses)
