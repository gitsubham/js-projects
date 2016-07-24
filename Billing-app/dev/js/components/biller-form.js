import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import { Field } from 'redux-form';
import {addItem} from '../actions/add-item-action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button,Well,ControlLabel,FormGroup,FormControl,Row,Col,Form } from 'react-bootstrap';


const validate = values => {
  const errors = {}
  if (!values.itemId) {
    errors.itemId = 'Required'
  } else if (values.itemId.length > 15) {
    errors.itemId = 'Must be 15 characters or less'
  }
  return errors
}


class ContactForm extends Component {
  dumbSubmit(values) {
  	const { mySubmitHandler} = this.props;
  	mySubmitHandler(values);
  	this.props.addItem(values);
  }

  render() {
    const {fields: {customerName,itemId,customerId,qty}, handleSubmit,items,customers} = this.props;
    return (
      
      <Form horizontal onSubmit={handleSubmit(this.dumbSubmit.bind(this))}>
        <Row>
          <Col md={3}>
            <ControlLabel>Customer Name</ControlLabel>
          </Col>
          <Col md={3}>
            <FormControl type="text" placeholder="Customer Name" {...customerName}/>
            {customerName.touched && customerName.error && <div>{customerName.error}</div>}
          </Col>
          <Col md={3} >
            <ControlLabel>Customer Type</ControlLabel>
          </Col>      
          <Col md={3} > 
          <FormControl componentClass="select" {...customerId}>   
                  { customers.map( (customer) =>  
                           <option 
                            value={customer.id} key={customer.id}>
                            {customer.customerType}
                          </option>
                    )}
                  </FormControl>
                  {customerId.touched && customerId.error && <div>{customerId.error}</div>}
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <ControlLabel>Item</ControlLabel>
          </Col>
          <Col md={3}>  
              <FormControl componentClass="select" {...itemId}>
                <option value="">Select an Item...</option>
                { items.map( (item) =>  
                			 <option 
                				value={item.itemId} key={item.itemId}>
                				{item.itemName}
                			</option>
                )}
              </FormControl>
              {itemId.touched && itemId.error && <div>{itemId.error}</div>}
          </Col>
          <Col md={3}>
              <ControlLabel>Quantity</ControlLabel>
          </Col>
          <Col md={3}>    
                <FormControl type="number" placeholder="quantity" {...qty}/>
                {qty.touched && qty.error && <div>{qty.error}</div>}
          </Col>
        </Row>
        <FormGroup>
          <Col md={10}> </Col>
          <Col md={2}>
            <Button type="submit" bsStyle="primary" bsSize="small" >Add Item</Button>
          </Col>
        </FormGroup>
      </Form>
      
    );
  }
}


ContactForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'contact',                           // a unique name for this form
  fields: ['customerName','itemId','customerId','qty'],
  validate // all the fields in your form
})(ContactForm);


// provide state of app as prop to UserList  component
function mapStateToProps(state){
	return {
		items : state.items,
		customers : state.customers
	}
}


function matchDispatchToProps(dispatch){
	return bindActionCreators({addItem : addItem},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(ContactForm);

