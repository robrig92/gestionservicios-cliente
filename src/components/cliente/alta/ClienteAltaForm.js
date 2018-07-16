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
			cliente: this.initCliente(),
			showErrors: false,
			errorMessages: [],
			fieldsWithError: {
				nombreContacto: false,
				password: false,
				email: false,
				rfc: false,
				calle: false,
				municipio: false,
				estado: false
			}
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
			calle: '',
			numInterior: '',
			numExterior: '',
			colonia: '',
			codigoPostal: '',
			municipio: '',
			estado: '',
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
		var fieldsWithError = [];
		var response = {
			hasError: false,
			messages: [],
			fieldsWithError: []
		};

		// Validando nombre.
		if (cliente.nombreContacto === '') {
			response.hasError = true;
			response.messages['nombreContacto'] = 'Debe proporcionar un nombre';
			fieldsWithError['nombreContacto'] = true;
		}

		if (cliente.password.length === 0) {
			response.hasError = true;
			response.messages['password'] = 'Debe proporcionar una contraseña';
			fieldsWithError['password'] = true;
		}

		// Validando email.
		if (cliente.email.length === 0 || !this.validateEmail(cliente.email)) {
			response.hasError = true;
			response.messages['email'] = 'Debe proporcionar un email válido';
			fieldsWithError['email'] = true;
		}

		// Validando R.F.C.
		if (cliente.rfc.length !== 0 && (cliente.rfc.length < 12 || cliente.rfc.length > 13)) {
			response.hasError = true;
			response.messages['rfc'] = 'El R.F.C. debe ser de al menos 12 caracteres y máximo 13';
			fieldsWithError['rfc'] = true;
		}

		// Validate Calle.
		if (cliente.calle.length === 0) {
			response.hasError = true;
			response.messages['calle'] = 'Debe ingresar una calle.';
			fieldsWithError['calle'] = true;
		}

		// Validate Municipio.
		if (cliente.municipio.length === 0) {
			response.hasError = true;
			response.messages['municipio'] = 'Debe ingresar un municipio.';
			fieldsWithError['municipio'] = true;
		}

		// Validate Estado
		if (cliente.estado.length === 0) {
			response.hasError = true;
			response.messages['estado'] = 'Debe ingresar un estado.';
			fieldsWithError['estado'] = true;
		}

		response.fieldsWithError = fieldsWithError;
		return response;
	}

	handleGuardarOnClick(e) {
		console.log("Guardando");
		const mThis = this;
		const data = new FormData();
		this.setState({
			showErrors: false,
			errorMessages: [],
			fieldsWithError: {
				nombreContacto: false,
				password: false,
				email: false,
				rfc: false,
				calle: false,
				municipio: false,
				estado: false
			}
		});
		let fieldsWithError = this.state.fieldsWithError;

		const validations = this.validate(this.state.cliente);
		if (validations.hasError) {
			let errorMessages = validations.messages;
			let valFieldsWithError = validations.fieldsWithError;

			// Guardamos los mensajes de error.
			for (var i in errorMessages) {
				let message = errorMessages[i]
				this.setState(prevState => ({
					errorMessages: prevState.errorMessages.concat(message)
				}));
			}

			// Guardamos los campos con error.
			for (var i in valFieldsWithError) {
				fieldsWithError[i] = true;
			}
			this.setState({
				fieldsWithError: fieldsWithError,
				showErrors: true
			});

			return;
		}

		data.append('enabled', true);
		data.append('rfc', this.state.cliente.rfc);
		data.append('email', this.state.cliente.email);
		data.append('nombreContacto', this.state.cliente.nombreContacto);
		data.append('password', this.state.cliente.password);
		data.append('telefono', this.state.cliente.telefono);
		data.append('calle', this.state.cliente.calle);
		data.append('numInterior', this.state.cliente.numInterior);
		data.append('numExterior', this.state.cliente.numExterior);
		data.append('colonia', this.state.cliente.colonia);
		data.append('codigoPostal', this.state.cliente.codigoPostal);
		data.append('municipio', this.state.cliente.municipio);
		data.append('estado', this.state.cliente.estado);
		data.append('razonSocial', this.state.cliente.razonSocial);
		data.append('nombreComercial', this.state.cliente.nombreComercial);

		// Valores calculados.
		data.append('usuarioCreador', '5adf9abc30c9451b476ee260');

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
		// Cambia el estado de redirección a true.
		return true;
	}
	render() {
		return (
			<div className="ClienteAltaForm">
				<ClienteAltaFormHeader />
				<ClienteAltaFormBody
					cliente={this.state.cliente}
					errorMessages={this.state.errorMessages}
					showErrors={this.state.showErrors}
					fieldsWithError={this.state.fieldsWithError}
					handleOnChange={this.handleOnChange}/>
				<ClienteAltaFormFooter
					guardarOnClick={this.handleGuardarOnClick}
					cancelarOnClick={this.handleCancelarOnClick}/>
			</div>
		);
	}
}

export default ClienteAltaForm;
