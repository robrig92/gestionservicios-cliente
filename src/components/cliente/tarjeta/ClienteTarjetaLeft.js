import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ClienteTarjetaResumen from './ClienteTarjetaResumen';

class ClienteTarjetaLeft extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ClienteTarjetaResumen
					cliente={this.props.cliente}/>
			</div>
		);
	}
}

ClienteTarjetaLeft.propTypes = {
	cliente: PropTypes.object.isRequired
};

export default ClienteTarjetaLeft;
