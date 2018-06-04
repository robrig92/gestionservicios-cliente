import React, {Component} from 'react';
import ClienteAltaFormBody from './ClienteAltaFormBody';
import ClienteAltaFormFooter from './ClienteAltaFormFooter';
import ClienteAltaFormHeader from './ClienteAltaFormHeader';
import Request from '../../../utils/AxiosRequest';
import SwalHelper from '../../../utils/SwalHelper';

class ClienteAltaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cliente: {
				rfc: '',
				email: '',
				nombreContacto: '',
				password: '',
				telefono: '',
				direccion: '',
				razonSocial: '',
				nombreComercial: '',
			}
		};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleGuardarOnClick = this.handleGuardarOnClick.bind(this);
		this.handleCancelarOnClick = this.handleCancelarOnClick.bind(this);
	}
	handleOnChange(e) {
		const name = e.target.name;
		const cliente = this.state.cliente;

		this.setState({
			cliente: {
				...cliente,
				[name]: e.target.value
			}
		});
	}
	handleGuardarOnClick(e) {
		console.log("Guardando");
		const data = new FormData();

		data.append('rfc', this.state.cliente.rfc);
		data.append('email', this.state.cliente.email);
		data.append('nombreContacto', this.state.cliente.nombreContacto);
		data.append('password', this.state.cliente.password);
		data.append('telefono', this.state.cliente.telefono);
		data.append('direccion', this.state.cliente.direccion);
		data.append('razonSocial', this.state.cliente.razonSocial);
		data.append('nombreComercial', this.state.cliente.nombreComercial);
		// Validamos

		// Si todo sale bien send post.
		Request.client.post('cliente', data)
		.then(function(response) {
			console.log(response);
			SwalHelper.success("¡Registro insertado!");
		}).catch(function(error) {
			console.log(error);
			// Mostramos swal con mensaje de error.
			SwalHelper.error("Error al almacenar el registro...");
		})
	}
	handleCancelarOnClick(e) {
		console.log("Cancelando");
	}
	render() {
		return (
			<div>
				<ClienteAltaFormHeader />
				<ClienteAltaFormBody
					cliente={this.state.cliente}
					handleOnChange={this.handleOnChange}/>
				<ClienteAltaFormFooter
					guardarOnClick={this.handleGuardarOnClick}
					cancelarOnClick={this.handleCancelarOnClick}/>
			</div>
		);
	}
}

export default ClienteAltaForm;
