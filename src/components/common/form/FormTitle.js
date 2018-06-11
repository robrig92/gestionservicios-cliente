import React, {Component} from 'react';
import '../../../style/CommonForm.css';

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
			<div className="FormTitle">
				<h1>
					<span className="FormTitle-Prim">{title}</span>
					{titleSec == '' ? '' : <span className="FormTitle-Sec">{titleSec}</span>}
				</h1>
			</div>
		);
	}
}

export default FormTitle;
