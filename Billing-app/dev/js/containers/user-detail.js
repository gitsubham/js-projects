import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserDetail extends Component {
	render() {
		if (!this.props.activeUser){
			return (<h4> select a  user..</h4>)
		}
		return (
			<div>
				<img src={this.props.activeUser.thumbnail}/>
				<h2> {this.props.activeUser.first} {this.props.activeUser.last} </h2>
				<h3> {this.props.activeUser.age} </h3>
				<h3> Description : {this.props.activeUser.description} </h3>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		activeUser: state.activeUser
	}
}


export default connect(mapStateToProps)(UserDetail)







