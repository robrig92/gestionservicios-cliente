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
							<div>
			      		<span><h3>Lauu Beu Ribé</h3></span>
								<span><h4>Lectura SA de CV.</h4></span>
								<span><h5>Lecturia</h5></span>
							</div>
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
