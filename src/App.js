import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Home from './views/Home';
import ClienteAlta from './views/cliente/ClienteAlta';
import ClienteListado from './views/cliente/ClienteListado';
import './style/App.css';

import AxiosRequest from './utils/AxiosRequest';

class App extends Component {
	componentDidMount() {
		// Ejemplo de código para realizar un update.
		// AxiosRequest.client.post('cliente/9b98e500d3bce1b26e22bcfeef0f7e6d358bba9bb5c4bed0cb68f1feb84b9dfa', {
		// 	_method: 'PATCH',
		// 	enabled: 1,
		// 	updatedAt: '2018-06-18',
		// 	nombreContacto: 'Roberto Padilla',
		// 	email: 'robert@mail.com',
		// })
		// 	.then(function(response) {
		// 		console.log(response);
		// 	}).catch(function(error) {
		// 		console.log(error);
		//  });
	}
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact="exact" path="/" component={Home}/>
					<Route path="/cliente/alta" component={ClienteAlta}/>
					<Route path="/cliente/listado" component={ClienteListado}/>
				</div>
		</Router>);
	}
}

export default App;
