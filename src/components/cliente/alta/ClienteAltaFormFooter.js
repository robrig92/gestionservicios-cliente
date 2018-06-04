import React, {Component} from 'react';
import FormButton from '../../common/form/FormButton';

import '../../../style/Cliente.css';

class ClienteAltaFormFooter extends Component {
	constructor(props) {
		super(props);
		this.guardarOnClick = this.guardarOnClick.bind(this);
		this.cancelarOnClick = this.cancelarOnClick.bind(this);
	}

	guardarOnClick(e) {
		this.props.guardarOnClick(e);
	}

	cancelarOnClick(e) {
		this.props.cancelarOnClick(e);
	}

	render() {
		return (
			<div className="ClienteAltaFormFooter">
				<FormButton
					name="guardar"
					label="Guardar"
					class="FormButton-Guardar"
					color="facebook"
					onClick={this.guardarOnClick}/>
				<FormButton
					name="cancelar"
					label="Cancelar"
					class="FormButton-Cancelar"
					color="grey"
					onClick={this.cancelarOnClick}/>
			</div>
		);
	}
}

export default ClienteAltaFormFooter;
