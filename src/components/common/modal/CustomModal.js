import React, {Component} from 'react';
import ClienteDetalle from '../../../views/cliente/ClienteDetalle';
import { Modal, Button } from 'semantic-ui-react'

class CustomModal extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	renderModal( type, hashId ){
		switch(type){
			case 'detalleCliente':
				return (
					<Modal trigger={<Button>Detalle</Button>}>
						<Modal.Content>
								<ClienteDetalle hashId={hashId} />		
				    	</Modal.Content>
				  	</Modal>
				);
				break;
		}

	}

	render(){
		const { type, hashId } = this.props;
		return (
			<div>
				{this.renderModal( type, hashId )}
			</div>
		)
	}

}

export default CustomModal;