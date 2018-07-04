import React, {Component} from 'react';

import ClienteDetalleForm from '../../components/cliente/detalle/ClienteDetalleForm';
import ClienteDetalleFormLeft from '../../components/cliente/detalle/ClienteDetalleFormLeft';
import {Grid} from 'semantic-ui-react';

class ClienteDetalle extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render(){
		return(
			<Grid columns={2}>
				<Grid.Column width={6}>
					<ClienteDetalleFormLeft/>
				</Grid.Column>
				<Grid.Column width={10}>
					<ClienteDetalleForm/>
				</Grid.Column>
			</Grid>
		);
	}

}

export default ClienteDetalle;