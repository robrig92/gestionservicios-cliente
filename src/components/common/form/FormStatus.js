import React, {Component} from 'react';

class FormStatus extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const status = this.props.hasId ? this.props.id : '' +
			this.props.status.toUpperCase();
		return (
			<div>
				<h3>{status}</h3>
			</div>
		);
	}
}

export default FormStatus;
