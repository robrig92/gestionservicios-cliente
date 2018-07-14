import React, {Component} from 'react';
import FormHeader from '../../common/FormHeader';
import ClienteListadoFormBody from './ClienteListadoFormBody';
import '../../../style/Cliente.css';
import Request from '../../../utils/AxiosRequest';
import SwalHelper from '../../../utils/SwalHelper';
import * as qs from 'query-string';
import BreadcrumbDefinitions from '../../../utils/BreadcrumbDefinitions'

class ClienteListadoForm extends Component{
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
		Request.client.get('cliente/parcial/' + page)
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

	render(){
		return (
			<div className="ClienteAltaForm">
				<FormHeader title="Listado de Clientes" status="" breadcrumb={BreadcrumbDefinitions.getBreadcrumbClienteList( ) } />
				<ClienteListadoFormBody contentPaginator={this.state.contentPaginator} handleInitializeData={this.handleInitializeData}/>
			</div>
		);
	}
}

export default ClienteListadoForm;
