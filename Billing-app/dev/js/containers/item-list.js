import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


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
				<div>  
					<div>
						<span> {selectedItem.itemName} </span>
						<span> {selectedItem.itemPrice}  </span>
						<span> {selectedItem.weight} </span>
						<span> {selectedItem.description} </span>
						<span> {item.qty} </span>
						<span> {price} </span>
					</div>
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