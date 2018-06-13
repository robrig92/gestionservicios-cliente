import React, {Component} from 'react';
import Request from '../../../utils/AxiosRequest';
import SwalHelper from '../../../utils/SwalHelper';
import ClienteAltaFormBody from './ClienteAltaFormBody';
import ClienteAltaFormFooter from './ClienteAltaFormFooter';
import ClienteAltaFormHeader from './ClienteAltaFormHeader';
import '../../../style/Cliente.css';

class ClienteAltaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cliente: this.initCliente()
		};
		this.validate = this.validate.bind(this);
		this.cleanFields = this.cleanFields.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleGuardarOnClick = this.handleGuardarOnClick.bind(this);
		this.handleCancelarOnClick = this.handleCancelarOnClick.bind(this);
	}
	initCliente() {
		return {
			rfc: '',
			email: '',
			nombreContacto: '',
			password: '',
			telefono: '',
			direccion: '',
			razonSocial: '',
			nombreComercial: '',
		};
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
	cleanFields() {
		this.setState({cliente: this.initCliente()});
	}
	validateEmail(mail) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
			return true
		}
		return false
	}
	validate(cliente) {
		var response = {
			hasError: false,
			messages: []
		};

		// Validando nombre.
		if (cliente.nombreContacto === '') {
			response.hasError = true;
			response.messages['nombreContacto'] = 'Debe proporcionar un nombre';
		}

		// Validando R.F.C.
		if (cliente.rfc.length !== 0 && (cliente.rfc.length < 12 || cliente.rfc.length > 13)) {
			response.hasError = true;
			response.messages['rfc'] = 'El R.F.C. debe ser de al menos 12 caracteres y máximo 13';
		}

		// Validando email.
		if (cliente.email.length === 0 || !this.validateEmail(cliente.email)) {
			response.hasError = true;
			response.messages['email'] = 'Debe proporcionar un email válido';
		}

		if (cliente.password.length === 0) {
			response.hasError = true;
			response.messages['password'] = 'Debe proporcionar una contraseña';
		}

		return response;
	}
	handleGuardarOnClick(e) {
		console.log("Guardando");
		const mThis = this;
		const data = new FormData();

		const validations = this.validate(this.state.cliente);
		if (validations.hasError) {
			const messages = validations.messages;
			for (var i in messages) {
				console.log(messages[i]);
			}
			return false;
		}

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
			mThis.cleanFields();
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
			<div className="ClienteAltaForm">
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
