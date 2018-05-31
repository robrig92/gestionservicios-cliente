import React, {Component} from 'react';
import FormTitle from '../../common/form/FormTitle';

class ClienteListadoFormHeader extends Component{
	constructor(props) {
	  super(props);
	}

	render(){
		return(
			<FormTitle 
				title="Listado de Clientes"
			/>
		);
	}
}

export default ClienteListadoFormHeader;