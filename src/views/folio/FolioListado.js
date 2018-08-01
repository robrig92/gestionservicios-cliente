import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import FolioListadoForm from '../../components/folio/listado/FolioListadoForm'
import ClienteAltaLeft from '../../components/cliente/alta/ClienteAltaLeft'

class FolioListado extends Component{

    constructor(props){
      super(props);
      this.state = {};
    }

    render(){
        return(
          <div>
            <Grid columns={2}>
              <Grid.Column width={4}>
                <ClienteAltaLeft />
              </Grid.Column>
              <Grid.Column width={12}>
                <FolioListadoForm />
              </Grid.Column>
            </Grid>
          </div>
        );
    }
}
export default FolioListado;
