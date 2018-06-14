import React, {Component} from 'react';
import ClienteListadoFormHeader from './ClienteListadoFormHeader';
import ClienteListadoFormBody from './ClienteListadoFormBody';
import '../../../style/Cliente.css';
import Request from '../../../utils/AxiosRequest';
import SwalHelper from '../../../utils/SwalHelper';

class ClienteListadoForm extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
			items: null,
		};
		
		const mThis = this;
		 Request.client.get('cliente')
		.then(function(response) {
			console.log("Correcto");
			mThis.setState( { items : response.data } );
			console.log(response);
		}).catch(function(error) {
//			console.log(error);
			// Mostramos swal con mensaje de error.
			SwalHelper.error("Error al obtener contenido del listado...");
		})
	}

	render(){
		return (
			<div className="ClienteAltaForm">
				<ClienteListadoFormHeader />
				<ClienteListadoFormBody items={this.state.items}/>
			</div>
		);
	}
}

export default ClienteListadoForm;
