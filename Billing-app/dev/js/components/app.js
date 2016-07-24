import React from 'React';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import BillerForm from '../components/biller-form';

import Bill from '../containers/bill';
require('../../scss/style.scss'); 


var abc = (values) => { 
	console.log(values)
} 

const App = () => (
	<div> 
		<BillerForm mySubmitHandler={abc} />
		<hr />
		<Bill />	
	</div>
);

export default App;













