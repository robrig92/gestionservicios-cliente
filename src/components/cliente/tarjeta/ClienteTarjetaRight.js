import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ClienteTarjetaRight extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ClienteTarjetaRight">
				RIGHT SIDE
			</div>
		);
	}
}

ClienteTarjetaRight.propTypes = {
	cliente: PropTypes.object.isRequired
};

export default ClienteTarjetaRight;
