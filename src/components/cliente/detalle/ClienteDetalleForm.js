import React, {Component} from 'react';
import '../../../style/ClienteDetalle.css';
import ClienteDetalleFormHeader from './ClienteDetalleFormHeader';
import ClienteDetalleFormBody from './ClienteDetalleFormBody';

import '../../../style/CommonForm.css';
import BreadcrumbDefinitions from '../../../utils/BreadcrumbDefinitions'
import FormHeader from '../../common/FormHeader'

class ClienteDetalleForm extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render(){
		const { cliente } = this.props;
		return(
			<div className="Form">
				<FormHeader title="Detalle de Cliente" status={cliente.enabled}/>
				<ClienteDetalleFormBody cliente={cliente}/>
			</div>
		);
	}
}

export default ClienteDetalleForm;
