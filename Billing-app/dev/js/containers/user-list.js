import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

// smart component - container
class UserList extends Component {
	createListItems(){
		return this.props.users.map((user) =>{
			return (
				<li key={user.id} onClick={() => this.props.selectUser(user)}> {user.first} {user.last} </li>
		);
		})	
	}

	render() {
		return (
			<ul>
				{this.createListItems()}
			</ul>
		);
	}
}

// provide state of app as prop to UserList  component
function mapStateToProps(state){
	return {
		users : state.users
	}
}

// provide actions defined inside app as prop to UserList  component
function matchDispatchToProps(dispatch){
	return bindActionCreators({selectUser : selectUser},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);
