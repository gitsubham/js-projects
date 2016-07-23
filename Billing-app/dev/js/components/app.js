import React from 'React';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import BillerForm from '../components/biller-form';

import ItemList from '../containers/item-list';
require('../../scss/style.scss'); 


var abc = (values) => { 
	console.log(values)
} 

const App = () => (
	<div> 
		<BillerForm mySubmitHandler={abc} />
		<hr />
		<ItemList />	
	</div>
);

export default App;













