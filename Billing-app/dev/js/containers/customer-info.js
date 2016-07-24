import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class CustomerInfo extends Component {
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
			})
			
			return (
				<div> 
					CustomerType Info : 
					{record.customerName} {selectedCustomerType.customerType}  {selectedCustomerType.discount} 
				</div>
		);
		})	
	}
	render() {
		if (!this.props.addedItem){
			return ;
		}	 
		return (
			<div>
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
export default connect(mapStateToProps)(CustomerInfo)