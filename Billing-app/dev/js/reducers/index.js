import {combineReducers} from 'redux';
import ItemsReducer from './reducer-items';
import CustomerReducer from './customer-reducer';
import AddedItemReducer from './reducer-selected-item';
import BillReducer from './reducer-bill';


import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
	form: formReducer,
	items : ItemsReducer,
	addedItem : AddedItemReducer,
	customers : CustomerReducer,
	bill: BillReducer
})

export default allReducers;