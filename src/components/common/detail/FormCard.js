import React, {Component} from 'react';
import { Card, Image } from 'semantic-ui-react'
import logo from '../../../assets/usuario_cliente.jpg';
import '../../../style/CommonForm.css';

class FormCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { cliente } = this.props;
		return (
			<Card>
			    <Image src={logo} />
			    <Card.Content>
			      <Card.Description>
							<div>
			      		<span><h3>{cliente.nombreContacto}</h3></span>
								<span><h4>{cliente.razonSocial}</h4></span>
								<span><h5>{cliente.nombreComercial}</h5></span>
							</div>
			      </Card.Description>
			    </Card.Content>
			    <Card.Content extra>
			      {cliente.email}
			    </Card.Content>
		  	</Card>
		);
	}
}

export default FormCard;
