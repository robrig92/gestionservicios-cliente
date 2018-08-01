import React,{Component} from 'react';

import TableContentPagination from '../../common/list/TableContentPagination';
import PanelFiltrado from '../../common/list/PanelFiltrado';

import '../../../style/CommonForm.css';

import HeadersListDefinitions from '../../../utils/HeadersListDefinitions';
import ActionListDefinitions from '../../../utils/ActionListDefinitions';

class FolioListadoFormBody extends Component{

    constructor( props ){
      super(props);
      this.state = {};

    }

    render(){
      const { contentPaginator } = this.props;
      return(
          <div>
            <PanelFiltrado contentPaginator={contentPaginator}/>
            <TableContentPagination handleInitializeData={this.props.handleInitializeData} headers={HeadersListDefinitions.getHeadersFolioList()} contentPaginator={contentPaginator} actions={ActionListDefinitions.getActionFolioList()} />
          </div>
      );
    }
}

export default FolioListadoFormBody;
