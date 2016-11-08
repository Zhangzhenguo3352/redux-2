import React,{ Component } from 'react'
import Radium from 'radium'
import { Card } from 'material-ui/Card'


class Course extends Component{
	getStyles(){
		return {
			root:{
				margin:'0 2rem 4rem',
				flexBasis:'100%',
				'@media (min-width:600px)':{
					flexBasis:'calc(50% - 4rem)'
				}
			},
			img:{
				width:'100%'
			}
		}
	}
	render(){
		const { course } = this.props;
		let styles = this.getStyles()
		return(
			<div style = {styles.root}>
				<Card>
					<div>
						<img src={course.image} style={styles.img}/>
					</div>
				</Card>
			</div>
		)
	}
}

export default Radium(Course )
