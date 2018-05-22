import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ClienteAlta extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Formulario de alta clientes</h1>
				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default ClienteAlta;
