import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ClienteTarjetaResumenImagen from './ClienteTarjetaResumenImagen';
import ClienteTarjetaResumenInfo from './ClienteTarjetaResumenInfo';

class ClienteTarjetaResumen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ClienteTarjetaResumenImagen cliente={this.props.cliente}/>
				<ClienteTarjetaResumenInfo cliente={this.props.cliente}/>
			</div>
		);
	}
}

ClienteTarjetaResumen.propTypes = {
	cliente: PropTypes.object.isRequired
};

export default ClienteTarjetaResumen;
