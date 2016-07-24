import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import { Field } from 'redux-form';
import {addItem} from '../actions/add-item-action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
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
      <form onSubmit={handleSubmit(this.dumbSubmit.bind(this))}>
        <div>
          <label>Customer Name</label>
          <input type="text" placeholder="Customer Name" {...customerName}/>
          {customerName.touched && customerName.error && <div>{customerName.error}</div>}
         </div>
         <div>
            <label>Item</label>
            <div>
              <select {...itemId}>
                <option value="">Select an Item...</option>
                { items.map( (item) =>  
                			 <option 
                				value={item.itemId} key={item.itemId}>
                				{item.itemName}
                			</option>
                )}
              </select>
              {itemId.touched && itemId.error && <div>{itemId.error}</div>}
            </div>
            </div>
             <div>
                <label>Quantity</label>
                <input type="number" placeholder="quantity" {...qty}/>
                {qty.touched && qty.error && <div>{qty.error}</div>}
             </div>
            <div>
            <label>Customer Type</label>
            <div>
              <select {...customerId}>
                { customers.map( (customer) =>  
                			 <option 
                				value={customer.id} key={customer.id}>
                				{customer.customerType}
                			</option>
                )}
              </select>
              {customerId.touched && customerId.error && <div>{customerId.error}</div>}
            </div>
          </div>
        <Button type="submit" bsStyle="success" bsSize="small" >Submit</Button>
      </form>
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

