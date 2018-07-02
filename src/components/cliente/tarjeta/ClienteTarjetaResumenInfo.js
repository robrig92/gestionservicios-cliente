import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ClienteTarjetaResumenInfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const cliente = this.props.cliente;

		return (
			<div>
				<p>{cliente.nombreContacto}</p>
				<p>{cliente.razonSocial}</p>
				<p>{cliente.nombreComercial}</p>
				<hr/>
				<p>{cliente.email}</p>
			</div>
		);
	}
}

ClienteTarjetaResumenInfo.propTypes = {
	cliente: PropTypes.object.isRequired
};

export default ClienteTarjetaResumenInfo;
