import React, {Component} from 'react';
import FormButton from '../../common/form/FormButton';

import '../../../style/Cliente.css';

class ClienteAltaFormFooter extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="ClienteAltaFormFooter">
				<FormButton
					name="guardar"
					label="Guardar"
					class="FormButton-Guardar"
					color="facebook"/>
				<FormButton
					name="cancelar"
					label="Cancelar"
					class="FormButton-Cancelar"
					color="grey"/>
			</div>
		);
	}
}

export default ClienteAltaFormFooter;
