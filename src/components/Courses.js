import React ,{Component} from 'react'
import Radium from 'radium'
import Date from '../data/data'

class Courser extends Component{
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

        {Date.map((item,i) => <div><img src={item.image}/>{i}</div>)}

      </div>
    )
  }
}
export default Radium(Courser)
