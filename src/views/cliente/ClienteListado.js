import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import ClienteListadoForm from '../../components/cliente/listado/ClienteListadoForm';
import ClienteAltaLeft from '../../components/cliente/alta/ClienteAltaLeft';
class ClienteListado extends Component {
	constructor(props) {
	  super(props);
	}

	render(){
		return(
			<Grid columns={2}>
				<Grid.Column width={4}>
					<ClienteAltaLeft />
				</Grid.Column>
				<Grid.Column width={12}>
					<ClienteListadoForm location={this.props.location}/>
				</Grid.Column>
			</Grid>
		);	
	}
	
}

export default ClienteListado;