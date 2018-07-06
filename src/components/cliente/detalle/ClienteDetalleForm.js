import React, {Component} from 'react';
import '../../../style/ClienteDetalle.css';
import ClienteDetalleFormHeader from './ClienteDetalleFormHeader';
import ClienteDetalleFormLeft from './ClienteDetalleFormLeft';
import ClienteDetalleFormBody from './ClienteDetalleFormBody';

import '../../../style/CommonForm.css';

class ClienteDetalleForm extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render(){
		const { cliente } = this.props;
		return(
			<div className="Form">
				<ClienteDetalleFormHeader />
				<ClienteDetalleFormBody cliente={cliente}/>
			</div>
		);
	}
}

export default ClienteDetalleForm;
