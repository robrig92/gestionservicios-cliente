import React, {Component} from 'react';

import ClienteDetalleForm from '../../components/cliente/detalle/ClienteDetalleForm';
import ClienteDetalleFormLeft from '../../components/cliente/detalle/ClienteDetalleFormLeft';
import {Grid} from 'semantic-ui-react';
import Request from '../../utils/AxiosRequest';
import SwalHelper from '../../utils/SwalHelper';

class ClienteDetalle extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
		this.getClienteByHashId = this.getClienteByHashId.bind(this);
	}

	getClienteByHashId(hashId){
		const mThis = this;
		Request.client.get('cliente/' + hashId)
				.then(function(response) {
						mThis.setState( { cliente : response.data } );
				}).catch(function(error) {
					SwalHelper.error("Error al obtener cliente...");
				})
	}

	componentWillMount(){
		console.log( this.props.location );
		this.getClienteByHashId( this.props.match.params.hashId );
  }

	render(){
		return(
			<Grid columns={2}>
				<Grid.Column width={6}>
					<ClienteDetalleFormLeft cliente={this.state.cliente}/>
				</Grid.Column>
				<Grid.Column width={10}>
					<ClienteDetalleForm cliente={this.state.cliente}/>
				</Grid.Column>
			</Grid>
		);
	}

}

export default ClienteDetalle;
