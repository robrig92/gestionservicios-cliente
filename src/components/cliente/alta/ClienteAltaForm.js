import React, {Component} from 'react';
import ClienteAltaFormHeader from './ClienteAltaFormHeader';
import ClienteAltaFormBody from './ClienteAltaFormBody';

class ClienteAltaForm extends Component {
	render() {
		return (
			<div>
				<ClienteAltaFormHeader />
				<ClienteAltaFormBody />
				<ClienteAltaFormFooter />
			</div>
		);
	}
}

class ClienteAltaFormFooter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Este es el footer</h1>
			</div>
		);
	}
}

export default ClienteAltaForm;
