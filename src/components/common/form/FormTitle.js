import React, {Component} from 'react';
import '../../../style/Cliente.css';

class FormTitle extends Component {
	constructor(props) {
		super(props);
	}
	getTitleSec() {

	}
	render() {
		const title = this.props.title;
		const titleSec = (this.props.twoParts ? '/' + this.props.titleSec : '');
		return (
			<div>
				<h1>
					<span className="ClienteAltaFormHeader-Title">{title}</span>
					{titleSec == '' ? '' : <span className="ClienteAltaFormHeader-TitleSec">{titleSec}</span>}
				</h1>
			</div>
		);
	}
}

export default FormTitle;
