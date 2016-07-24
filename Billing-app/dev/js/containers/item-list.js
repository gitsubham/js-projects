import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Alert,Well,Row,Col } from 'react-bootstrap';

class ItemList extends Component {
	createListItems(){
		return this.props.addedItem.map((item) =>{
			console.log(this.props.items);
			var selectedItem = {};
			this.props.items.map((item1) => {
				if (item1.itemId == item.itemId){
					selectedItem= item1;
				}
			} 
			)
			var price =  item.qty * selectedItem.itemPrice;
			console.log(selectedItem);
			return (
				
					<Alert bsStyle="warning">
						<span > Item name : {selectedItem.itemName} </span>
						<span> Item Price : {selectedItem.itemPrice}  </span>
						<span> Item Weight : {selectedItem.weight} </span>
						<span> Item description : {selectedItem.description} </span>
						<span> Item Quantity : {item.qty} </span>
						<span> Total Price : {price} </span>
					</Alert>
				
		);
		})	
	}
	render() {
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
	return {
		addedItem: state.addedItem,
		items : state.items,
		customerTypes : state.customers
	}
}
export default connect(mapStateToProps)(ItemList)