import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import ItemsReducer from './reducer-items';
import CustomerReducer from './customer-reducer';
import AddedItemReducer from './reducer-selected-item';
import BillReducer from './reducer-bill';


import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
	form: formReducer,
	users: UserReducer,
	activeUser : ActiveUserReducer,
	items : ItemsReducer,
	addedItem : AddedItemReducer,
	customers : CustomerReducer,
	bill: BillReducer
})

export default allReducers;