import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
import FormField from '../../common/form/FormField';

class ClienteAltaFormBody extends Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
	}
	handleOnChange(e) {
		this.props.handleOnChange(e);
	}
	render() {
		return (
			<Form>
				<FormField
					label="Nombre"
					type="text"
					name="nombreContacto"
					value={this.props.cliente.nombreContacto}
					onChange={this.handleOnChange}/>
				<FormField
					label="Contraseña"
					type="password"
					name="password"
					value={this.props.cliente.password}
					onChange={this.handleOnChange}/>
				<FormField
					label="Razón social"
					type="text"
					name="razonSocial"
					value={this.props.cliente.razonSocial}
					onChange={this.handleOnChange}/>
				<FormField
					label="Nombre comercial"
					type="text"
					name="nombreComercial"
					value={this.props.cliente.nombreComercial}
					onChange={this.handleOnChange}/>
				<FormField
					label="Dirección"
					type="text"
					name="direccion"
					value={this.props.cliente.direccion}
					onChange={this.handleOnChange}/>
				<Form.Group>
					<FormField
						label="Teléfono"
						type="text"
						name="telefono"
						value={this.props.cliente.telefono}
						width="eight"
						onChange={this.handleOnChange}/>
					<FormField
						label="E-mail"
						type="email"
						name="email"
						value={this.props.cliente.email}
						width="eight"
						onChange={this.handleOnChange}/>
				</Form.Group>
				<FormField
					label="R.F.C."
					type="text"
					name="rfc"
					value={this.props.cliente.rfc}
					width="eight"
					onChange={this.handleOnChange}/>
			</Form>
		);
	}
}

export default ClienteAltaFormBody;
