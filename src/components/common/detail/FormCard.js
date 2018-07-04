import React, {Component} from 'react';
import { Card, Image } from 'semantic-ui-react'

import '../../../style/CommonForm.css';

class FormCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Card>
			    <Image src='' />
			    <Card.Content>
			      <Card.Description>
			      		<h2>Lauu Beu Ribé</h2>
						<h3>Lectura SA de CV.</h3>
						<h4>Lecturia</h4>
			      </Card.Description>
			    </Card.Content>
			    <Card.Content extra>
			      lua_rovi@lecturia.com
			    </Card.Content>
		  	</Card>
		);
	}
}

export default FormCard;