import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
import FormField from '../../common/form/FormField';
import FormErrorTag from '../../common/form/FormErrorTag';

class ClienteAltaFormBody extends Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
	}
	handleOnChange(e) {
		this.props.handleOnChange(e);
	}
	render() {
		let errorsDiv = '';

		if (this.props.showErrors) {
			errorsDiv = <FormErrorTag
							header="Errores en el formulario"
							messages={this.props.errorMessages}/>
		}
		return (
			<Form>
				<FormField
					hasError={this.props.fieldsWithError.nombreContacto}
					label="Nombre"
					type="text"
					name="nombreContacto"
					value={this.props.cliente.nombreContacto}
					onChange={this.handleOnChange}/>
				<FormField
					hasError={this.props.fieldsWithError.password}
					label="Contraseña"
					type="password"
					name="password"
					value={this.props.cliente.password}
					onChange={this.handleOnChange}/>
				<FormField
					hasError={false}
					label="Razón social"
					type="text"
					name="razonSocial"
					value={this.props.cliente.razonSocial}
					onChange={this.handleOnChange}/>
				<FormField
					hasError={false}
					label="Nombre comercial"
					type="text"
					name="nombreComercial"
					value={this.props.cliente.nombreComercial}
					onChange={this.handleOnChange}/>
				<FormField
					hasError={this.props.fieldsWithError.calle}
					label="Calle"
					type="text"
					name="calle"
					value={this.props.cliente.calle}
					onChange={this.handleOnChange}/>
				<Form.Group>
					<FormField
						hasError={false}
						label="No. Interior"
						type="text"
						name="numInterior"
						value={this.props.cliente.numInterior}
						width="eight"
						onChange={this.handleOnChange}/>
					<FormField
						hasError={false}
						label="No. Exterior"
						type="text"
						name="numExterior"
						value={this.props.cliente.numExterior}
						width="eight"
						onChange={this.handleOnChange}/>
				</Form.Group>
				<Form.Group>
					<FormField
						hasError={false}
						label="Colonia"
						type="text"
						name="colonia"
						value={this.props.cliente.colonia}
						width="eight"
						onChange={this.handleOnChange}/>
					<FormField
						hasError={false}
						label="Código postal"
						type="text"
						name="codigoPostal"
						value={this.props.cliente.codigoPostal}
						width="eight"
						onChange={this.handleOnChange}/>
				</Form.Group>
				<Form.Group>
					<FormField
						hasError={this.props.fieldsWithError.municipio}
						label="Municipio"
						type="text"
						name="municipio"
						value={this.props.cliente.municipio}
						width="eight"
						onChange={this.handleOnChange}/>
					<FormField
						hasError={this.props.fieldsWithError.estado}
						label="Estado"
						type="text"
						name="estado"
						value={this.props.cliente.estado}
						width="eight"
						onChange={this.handleOnChange}/>
				</Form.Group>
				<Form.Group>
					<FormField
						hasError={false}
						label="Teléfono"
						type="text"
						name="telefono"
						value={this.props.cliente.telefono}
						width="eight"
						onChange={this.handleOnChange}/>
					<FormField
						hasError={this.props.fieldsWithError.email}
						label="E-mail"
						type="email"
						name="email"
						value={this.props.cliente.email}
						width="eight"
						onChange={this.handleOnChange}/>
				</Form.Group>
				<FormField
					hasError={this.props.fieldsWithError.rfc}
					label="R.F.C."
					type="text"
					name="rfc"
					value={this.props.cliente.rfc}
					width="eight"
					onChange={this.handleOnChange}/>
				{errorsDiv}
			</Form>
		);
	}
}

export default ClienteAltaFormBody;
