import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import ClienteAltaLeft from '../../components/cliente/alta/ClienteAltaLeft';
import ClienteAltaForm from '../../components/cliente/alta/ClienteAltaForm';
import '../../style/Cliente.css';

class ClienteAlta extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Grid className="ui container" columns={2}>
				<Grid.Row>
					<Grid.Column width={6} className="ContainerLeft">
						<ClienteAltaLeft />
					</Grid.Column>
					<Grid.Column width={10} className="ContainerRight">
						<ClienteAltaForm />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default ClienteAlta;
