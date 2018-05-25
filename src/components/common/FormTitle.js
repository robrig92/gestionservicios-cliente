import React, {Component} from 'react';

class FormTitle extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const title = this.props.title +
			(this.props.twoParts ? '/' + this.props.titleSec : ''); 
		return (
			<div>
				<h1>{title}</h1>
			</div>
		);
	}
}

export default FormTitle;
