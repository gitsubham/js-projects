import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import { Field } from 'redux-form';
import {addItem} from '../actions/add-item-action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';

const validate = values => {
  const errors = {}
  if (!values.itemName) {
    errors.itemName = 'Required'
  } else if (values.itemName.length > 15) {
    errors.itemName = 'Must be 15 characters or less'
  }
  return errors
}


class ContactForm extends Component {
  dumbSubmit(item) {
  	const { mySubmitHandler,orderBasket} = this.props;
   // orderBasket.push(item);
  	mySubmitHandler(item);
  	this.props.addItem(item);
  }

  render() {
    const {fields: {customerName,itemName,customerType}, handleSubmit,items,customers,orderBasket} = this.props;
    debugger;
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
              <select {...itemName}>
                <option value="">Select an Item...</option>
                { items.map( (item) =>  
                			 <option 
                				value={item.itemName} key={item.itemId}>
                				{item.itemName}
                			</option>
                )}
              </select>
              {itemName.touched && itemName.error && <div>{itemName.error}</div>}
            </div>
            </div>
            <div>
            <label>Customer Type</label>
            <div>
              <select {...customerType}>
                { customers.map( (customer) =>  
                			 <option 
                				value={customer.customerType} key={customer.id}>
                				{customer.customerType}
                			</option>
                )}
              </select>
              {itemName.touched && itemName.error && <div>{itemName.error}</div>}
            </div>
          </div>
        <Button type="submit" bsStyle="success" bsSize="small" >Submit</Button>
      </form>
    );
  }
}


ContactForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'contact',                           // a unique name for this form
  fields: ['customerName','itemName','customerType'],
  validate // all the fields in your form
})(ContactForm);


// provide state of app as prop to UserList  component
function mapStateToProps(state){
	debugger;
	return {
		items : state.items,
		customers : state.customers,
    orderBasket: state.orderBasket
	}
}


function matchDispatchToProps(dispatch){
	return bindActionCreators({addItem : addItem},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(ContactForm);

