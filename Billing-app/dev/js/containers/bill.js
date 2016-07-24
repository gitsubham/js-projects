import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItemList from '../containers/item-list';
import  CustomerInfo from '../containers/customer-info';
import { Navbar,Well,ControlLabel,FormGroup,FormControl,Row,Col } from 'react-bootstrap';

export default class Bill extends Component {

	render() {
		return (
				<Row>
					<Col>
							<ItemList />
							<CustomerInfo />
					</Col>	
				</Row>
		);
	}
}
