import React, {Component} from 'react';
import '../../../style/ClienteDetalle.css';
import '../../../style/CommonForm.css';
import FormCard from '../../common/detail/FormCard';

class ClienteDetalleFormLeft extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return(
			<div className="ClienteAltaLeft">
				<div className="ClienteAltaLeft-Content">
					<FormCard/>
				</div>
			</div>
		);
	}

}

export default ClienteDetalleFormLeft;