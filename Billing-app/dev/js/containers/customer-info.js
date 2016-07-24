import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {generateBill} from '../actions/generate-bill-action';
import { Alert,Well,Row,Col } from 'react-bootstrap';

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
				<Alert> 
					<span> customerName :  {record.customerName}  </span>
					<span> customerType :  {selectedCustomerType.customerType}  </span>
					<span> discount :  {selectedCustomerType.discount}  </span>
				</Alert>
		);
		})	
		

	}
	render() {
		if (!this.props.addedItem){
			return(<div> ADD SOMETHING.... </div>) ;
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
		customerTypes : state.customers,
		bill : state.bill
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({generateBill : generateBill},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(CustomerInfo)