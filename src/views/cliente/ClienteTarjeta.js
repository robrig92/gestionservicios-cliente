import React, {Component} from 'react';
import ClienteTarjetaLeft from '../../components/cliente/tarjeta/ClienteTarjetaLeft';
import ClienteTarjetaRight from '../../components/cliente/tarjeta/ClienteTarjetaRight';

class ClienteTarjeta extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ClienteTarjetaLeft/>
				<ClienteTarjetaRight/>
			</div>
		);
	}
}

export default ClienteTarjeta;
