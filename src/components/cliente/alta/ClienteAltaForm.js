import React, {Component} from 'react';
import ClienteAltaFormBody from './ClienteAltaFormBody';
import ClienteAltaFormFooter from './ClienteAltaFormFooter';
import ClienteAltaFormHeader from './ClienteAltaFormHeader';

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

export default ClienteAltaForm;
