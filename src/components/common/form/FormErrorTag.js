import React, {Component} from 'react';

class FormErrorTag extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const messages = this.props.messages.map( (message, index) => {
			return <li key={index}>{message}</li>
		});
		return (
			<div className = "ui red message" >
				<div className="header">
					{this.props.header}
				</div>
				<ul className="list">
					{messages}
				</ul>
			</div>
		);
	}
}

export default FormErrorTag;
