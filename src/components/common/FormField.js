import React, {Component} from 'react';

class FormField extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		this.props.onChange(e);
	}
	render() {
		return (
			<div>
				<label>{this.props.label}</label>
				<input
					type={this.props.type}
					name={this.props.name}
					value={this.props.value}
					onChange={this.onChange}/>
			</div>
		);
	}
}

export default FormField;
