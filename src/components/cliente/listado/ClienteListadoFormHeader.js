import React, {Component} from 'react';
import FormTitle from '../../common/form/FormTitle';
import { Breadcrumb } from 'semantic-ui-react'

class ClienteListadoFormHeader extends Component{
	render(){
		return(
			<div>
			  <FormTitle 
					title="Listado de Clientes"
				/>
			  </div>
		);
	}
}

export default ClienteListadoFormHeader;