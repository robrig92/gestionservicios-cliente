import React, {Component} from 'react';
import ClienteDetalle from '../../../views/cliente/ClienteDetalle';
import { Modal, Button } from 'semantic-ui-react'

class CustomModal extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = { open : false };
	}
	 

	show = () => this.setState({ open: true })
	close = () => this.setState({ open: false })

	renderModal( type, hashId ){
		switch(type){
			case 'detalleCliente':
				return (
					<Modal size="fullscreen" trigger={ <Button >Detalle</Button>} onClose={this.close}>
						<Modal.Content>
								<ClienteDetalle hashId={hashId} />		
				    	</Modal.Content>
				    	 <Modal.Actions>
				            <Button color='grey' onClick={this.close}>
				              Cerrar
				            </Button>
				          </Modal.Actions>
				  	</Modal>
				);
			default:
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