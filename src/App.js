import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import Home from './views/Home';
import ClienteAlta from './views/cliente/ClienteAlta';
import ClienteListado from './views/cliente/ClienteListado';
import ClienteTarjeta from './views/cliente/ClienteTarjeta';
import './style/App.css';

import AxiosRequest from './utils/AxiosRequest';

class App extends Component {
	componentDidMount() {
		// Ejemplo de código para realizar un update.
		// AxiosRequest.client.post('marca/5b2f291036e2fe6c30000512', {
		// 	_method: 'DELETE',
		// 	enabled: true,
		// 	updatedAt: '2018-05-24 12:20:12',
		// 	marca: 'Motorola'
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
					<Route path="/cliente/alta/" component={ClienteAlta}/>
					<Route path="/cliente/listado" component={ClienteListado}/>
					<Route path="/cliente/tarjeta" component={ClienteTarjeta}/>
				</div>
		</Router>);
	}
}

export default App;
