import React, {Component} from 'react';
import ClienteListadoFormHeader from './ClienteListadoFormHeader';
import ClienteListadoFormBody from './ClienteListadoFormBody';
import '../../../style/Cliente.css';
import Request from '../../../utils/AxiosRequest';
import SwalHelper from '../../../utils/SwalHelper';

class ClienteListadoForm extends Component{
	constructor(props) {
	  super(props);
	  Request.client.get('cliente')
		.then(function(response) {
			console.log(response);
		}).catch(function(error) {
			console.log(error);
			// Mostramos swal con mensaje de error.
			SwalHelper.error("Error al obtener contenido del listado...");
		})
	}

	render(){
		return (
			<div className="ClienteAltaForm">
				<ClienteListadoFormHeader />
				<ClienteListadoFormBody />
			</div>
		);
	}
}

export default ClienteListadoForm;
