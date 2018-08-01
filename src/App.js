import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import Home from './views/Home';
import ClienteAlta from './views/cliente/ClienteAlta';
import ClienteListado from './views/cliente/ClienteListado';
import ClienteDetalle from './views/cliente/ClienteDetalle';

import UsuarioListado from './views/usuario/UsuarioListado';

import FolioListado from './views/folio/FolioListado';


import './style/App.css';

import AxiosRequest from './utils/AxiosRequest';

class App extends Component {
	componentDidMount() {
		// Ejemplo de código para realizar un update.
		AxiosRequest.client.post('marca/5b2f291036e2fe6c30000512', {
			_method: 'DELETE',
			enabled: true,
			updatedAt: '2018-05-24 12:20:12',
			marca: 'Motorola'
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
					<Route path="/cliente/alta/" component={ClienteAlta}/>
					<Route path="/cliente/listado" component={ClienteListado}/>
					<Route path="/cliente/detalle/:hashId" component={ClienteDetalle}/>

					<Route path="/usuario/listado" component={UsuarioListado}/>

					<Route path="/folio/listado" component={FolioListado}/>

				</div>
		</Router>);
	}
}

export default App;
