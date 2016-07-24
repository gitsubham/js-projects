import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItemList from '../containers/item-list';
import  CustomerInfo from '../containers/customer-info';

export default class Bill extends Component {
	render() {
		return (
			<div>
				<ItemList />
				<CustomerInfo />
			</div>	
		);
	}
}
