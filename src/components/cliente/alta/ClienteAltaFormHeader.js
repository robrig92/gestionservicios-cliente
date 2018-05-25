import React, {Component} from 'react';
import FormTitle from '../../common/FormTitle';
import FormStatus from '../../common/FormStatus';

class ClienteAltaFormHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<FormTitle
					title="Clientes"
					twoParts
					titleSec="Alta"/>
				<FormStatus
					status="Activo"/>
			</div>
		);
	}
}

export default ClienteAltaFormHeader;
