import React,{Component} from 'react';

import FormHeader from '../../common/FormHeader';
import BreadcrumbDefinitions from '../../../utils/BreadcrumbDefinitions'
import UsuarioListadoFormBody from './UsuarioListadoFormBody';

import '../../../style/CommonForm.css';

import Request from '../../../utils/AxiosRequest';
import SwalHelper from '../../../utils/SwalHelper';

class UsuarioListadoForm extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
			contentPaginator: null,
		};
		this.initializeData = this.initializeData.bind(this);
		this.handleInitializeData = this.handleInitializeData.bind(this);

	}

	initializeData(page) {
		const mThis = this;
		//Request.client.get('cliente/parcial/' + (mThis.props.location?qs.parse(mThis.props.location.search).page:1))
		Request.client.get('usuario/parcial/' + page)
				.then(function(response) {
						mThis.setState( { contentPaginator : response.data } );
				}).catch(function(error) {
					SwalHelper.error("Error al obtener contenido del listado...");
				})
	}

	handleInitializeData(e) {
		this.initializeData( e.target.getAttribute('value') );
	}

	 componentDidMount() {
    	this.initializeData(1);
	}

	render() {
		return (
			<div className="Form">
				<FormHeader title="Listado de Usuarios" breadcrumb={BreadcrumbDefinitions.getBreadcrumbUsuarioList()}/>
				<UsuarioListadoFormBody contentPaginator={this.state.contentPaginator} handleInitializeData={this.handleInitializeData}/>
			</div>
		);
	}

}

export default UsuarioListadoForm;