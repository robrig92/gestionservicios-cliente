import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

import '../../../style/CommonForm.css';

class FormButton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Button
				name={this.props.name}
				className={this.props.class}
				color={this.props.color}
				role="button">{this.props.label}</Button>
		);
	}
}

export default FormButton;
