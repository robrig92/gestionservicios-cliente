import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ClienteAltaLeft from '../../components/cliente/alta/ClienteAltaLeft';
import ClienteAltaForm from '../../components/cliente/alta/ClienteAltaForm';

class ClienteAlta extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ClienteAltaLeft />
				<ClienteAltaForm />
			</div>
		);
	}
}

export default ClienteAlta;
