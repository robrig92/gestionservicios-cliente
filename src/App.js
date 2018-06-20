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
		AxiosRequest.client.post('cliente/1e8e72c2ec05e9939db7d938ce61553332392c3f3ccb18b40e346495946072ea', {
			_method: 'PATCH',
			enabled: 1,
			updatedAt: '2018-06-19',
			nombreContacto: 'Roberto Testing',
			email: 'robert@mail.com',
		})
			.then(function(response) {
				console.log(response);
			}).catch(function(error) {
				console.log(error);
		 });
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
