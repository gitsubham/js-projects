import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class ItemList extends Component {
	printCustomerTypeandDiscount(){
		return this.props.addedItem.map((record) =>{
			var selectedCustomerType = {};
			console.log(this.props.customerTypes);
			console.log("record");
			console.log(record);
			this.props.customerTypes.map((customerType) => {
				if (customerType.id == record.customerId){
					selectedCustomerType= customerType;
					console.log("selectedCustomerType");
					console.log(selectedCustomerType);
				}
			} 
			)
			
			return (
				<div> 
					CustomerType Info : 
					{selectedCustomerType.customerType}  {selectedCustomerType.discount} 
				</div>
		);
		})	
	}
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
			console.log(selectedItem);
			return (
				<div>  {selectedItem.itemName} {selectedItem.itemPrice} 
						{selectedItem.weight} {selectedItem.description}
				</div>
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
				{this.printCustomerTypeandDiscount()}
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