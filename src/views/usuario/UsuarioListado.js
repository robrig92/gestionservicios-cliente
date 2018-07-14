import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import UsuarioListadoForm from '../../components/usuario/listado/UsuarioListadoForm'
import ClienteAltaLeft from '../../components/cliente/alta/ClienteAltaLeft'

class UsuarioListado extends Component{
	
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<Grid columns={2}>
					<Grid.Column width={4}>
						<ClienteAltaLeft/>
					</Grid.Column>
					<Grid.Column width={12}>
						<UsuarioListadoForm />
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default UsuarioListado;