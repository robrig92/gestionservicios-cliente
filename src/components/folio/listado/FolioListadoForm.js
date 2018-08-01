import  React, {Component} from 'react';

import FormHeader from '../../common/FormHeader';
import BreadcrumbDefinitions from '../../../utils/BreadcrumbDefinitions'
import FolioListadoFormBody from './FolioListadoFormBody'

import Request from '../../../utils/AxiosRequest';
import SwalHelper from '../../../utils/SwalHelper';

class FolioListadoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      contentPaginator : null,
    }
    this.initializeData = this.initializeData.bind(this);
    this.handleInitializeData = this.handleInitializeData.bind(this);
  }

  initializeData(page){
    const mThis = this;
    Request.client.get( 'folio/parcial/' + page )
      .then( function( response ){
          mThis.setState( { contentPaginator : response.data } );
      }).catch(function(error){
          SwalHelper.error("Error al obtener contenido del listado.");
      })
  }

  handleInitializeData(e){
    this.initializeData( e.target.getAttribute('value') );
  }

  componentDidMount(){
    this.initializeData(1);
  }

  render(){
    return(
      <div className="Form">
        <FormHeader title="Listado de Folios" breadcrumb={BreadcrumbDefinitions.getBreadcrumbFolioList()}/>
        <FolioListadoFormBody />
      </div>
    );
  }
}

export default FolioListadoForm;
