import React, {Component} from 'react';
import FormField from '../../common/FormField';

class ClienteAltaFormBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rfc: '',
			email: '',
			nombre: '',
			password: '',
			telefono: '',
			direccion: '',
			razonSocial: '',
			nombreComercial: '',
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}
	handleOnChange(e) {
		const name = e.target.name;
		this.setState({[name]: e.target.value});
	}
	render() {
		return (
			<form>
				<FormField
					label="Nombre"
					type="text"
					name="nombre"
					value={this.state.nombre}
					onChange={this.handleOnChange}/>
				<FormField
					label="Contraseña"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleOnChange}/>
				<FormField
					label="Razón social"
					type="text"
					name="razonSocial"
					value={this.state.razonSocial}
					onChange={this.handleOnChange}/>
				<FormField
					label="Nombre comercial"
					type="text"
					name="nombreComercial"
					value={this.state.nombreComercial}
					onChange={this.handleOnChange}/>
				<FormField
					label="Dirección"
					type="text"
					name="direccion"
					value={this.state.direccion}
					onChange={this.handleOnChange}/>
				<FormField
					label="Teléfono"
					type="text"
					name="telefono"
					value={this.state.telefono}
					onChange={this.handleOnChange}/>
				<FormField
					label="E-mail"
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleOnChange}/>
				<FormField
					label="R.F.C."
					type="text"
					name="rfc"
					value={this.state.rfc}
					onChange={this.handleOnChange}/>
			</form>
		);
	}
}

export default ClienteAltaFormBody;
