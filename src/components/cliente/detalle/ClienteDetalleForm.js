import React, {Component} from 'react';
import '../../../style/ClienteDetalle.css';
import ClienteDetalleFormHeader from './ClienteDetalleFormHeader';
import ClienteDetalleFormBody from './ClienteDetalleFormBody';
import '../../../style/CommonForm.css';

class ClienteDetalleForm extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	
	render(){
		return(
			<div className="Form">
				<ClienteDetalleFormHeader />
				<ClienteDetalleFormBody/>
			</div>
		);
	}
}

export default ClienteDetalleForm;