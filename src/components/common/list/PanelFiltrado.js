import React, {Component} from 'react';
import '../../../style/CommonForm.css';
import { Header } from 'semantic-ui-react'

class PanelFiltrado extends Component{
	
	constructor(props) {
	  super(props);
	}

	render(){
		const { contentPaginator } = this.props;
		return(
			<div className='PanelFiltradoListado'>
				<h1>
					<span className='PanelFiltradoListadoCount'>{contentPaginator?contentPaginator.total:0}</span><span> RESULTADOS</span>
				</h1>
			</div>
		);
	}

}

export default PanelFiltrado;