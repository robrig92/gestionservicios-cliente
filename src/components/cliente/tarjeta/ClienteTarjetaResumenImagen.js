import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ClienteTarjetaResumenImagen extends Component {
	render() {
		const cliente = this.props.cliente;
		const uri = (cliente.rutaFoto === '' || cliente.rutaFoto === undefined) ?
			'404NotFound.jpg' : cliente.rutaFoto;
		return (
			<div>
				<img
					className="ClienteTarjetaResumenImagen-img"
					src={uri}
					alt={cliente.nombreContacto}/>
				</div>
		);
	}
}

ClienteTarjetaResumenImagen.propTypes = {
	cliente: PropTypes.isRequired
};

export default ClienteTarjetaResumenImagen;
