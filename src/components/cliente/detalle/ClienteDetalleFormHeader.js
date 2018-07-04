import React, {Component} from 'react'
import '../../../style/ClienteDetalle.css';
import FormTitle from '../../common/form/FormTitle';


class ClienteDetalleFormHeader extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return(
			<div>
				<FormTitle 
				title="Detalle de Cliente"
				/>
			</div>
		);
	}

}
export default ClienteDetalleFormHeader;