import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';

class FormField extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		this.props.onChange(e);
	}
	render() {
		const classError = this.props.hasError ? 'field error' : '';
		return (
				<Form.Field
					width={this.props.width}>
					<label>{this.props.label}</label>
					<div className={classError}>
						<input
							type={this.props.type}
							name={this.props.name}
							value={this.props.value}
							onChange={this.onChange}/>
					</div>
				</Form.Field>
		);
	}
}

export default FormField;
