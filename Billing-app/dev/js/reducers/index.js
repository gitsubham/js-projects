import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import ItemsReducer from './reducer-items';
import CustomerReducer from './customer-reducer';
import AddedItemReducer from './reducer-selected-item';
import OrderBasket from './reducer-order-basket';


import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
	form: formReducer,
	users: UserReducer,
	activeUser : ActiveUserReducer,
	items : ItemsReducer,
	addedItem : AddedItemReducer,
	customers : CustomerReducer,
	orderBasket :OrderBasket

})

export default allReducers;