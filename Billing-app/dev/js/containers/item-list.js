import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class ItemList extends Component {
	createListItems(){
		debugger
		return (
			<div>
					<span key={this.props.addedItem.itemId}> {this.props.addedItem.customerName} </span>
					<span key={this.props.addedItem.itemName}> {this.props.addedItem.itemName} </span>
			</div>

		);
	}
	render() {
		debugger
		if (!this.props.addedItem){
			return (<h4> Add an Item..</h4>)
		}	 
		return (
			<div>
					{this.createListItems()}
			</div>		
		);
	}
}



function mapStateToProps(state){
	debugger;
	return {
		addedItem: state.addedItem
	}
}
export default connect(mapStateToProps)(ItemList)