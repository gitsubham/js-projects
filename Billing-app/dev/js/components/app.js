import React from 'React';
import BillerForm from '../components/biller-form';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Well,Col,Navbar } from 'react-bootstrap';
import Bill from '../containers/bill';
require('../../scss/style.scss'); 


var abc = (values) => { 
	console.log(values)
} 

const App = () => (

	<Grid>
		<Navbar>
	    	<Navbar.Header>
			  	<Navbar.Brand>
			        	<a href="#">Athena Store</a>
			   	</Navbar.Brand>
			</Navbar.Header>
		</Navbar> 
		<Well>
			<Row className="show-grid">	
				<Col xs={12} md={8} >
					<BillerForm mySubmitHandler={abc} />
				<hr />
			</Col>	
			</Row>
		</Well>
		<Row className="show-grid">	
			<Col xs={12} md={8} >
				<Bill />
			</Col>	
		</Row>		
		
	</Grid>
);

export default App;













