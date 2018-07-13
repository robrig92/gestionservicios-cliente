import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import FormButton from '../../common/form/FormButton';

import '../../../style/Cliente.css';

class ClienteAltaFormFooter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			/**
			 * Valor utilizado para controlar el retorno.
			 * @type true
			 */
			redirect: false
		};

		this.guardarOnClick = this.guardarOnClick.bind(this);
		this.cancelarOnClick = this.cancelarOnClick.bind(this);
	}

	guardarOnClick(e) {
		this.props.guardarOnClick(e);
	}

	cancelarOnClick(e) {
		let response = this.props.cancelarOnClick(e);
		this.setState({redirect: response});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />
		}
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
