import React, {Component} from 'react';
import TableContentPagination from '../../common/list/TableContentPagination';
import PanelFiltrado from '../../common/list/PanelFiltrado';

import '../../../style/CommonForm.css';

import HeadersListDefinitions from '../../../utils/HeadersListDefinitions';
import ActionListDefinitions from '../../../utils/ActionListDefinitions';

class ClienteListadoFormBody extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { contentPaginator } = this.props;
		//console.log(contentPaginator);
		return(
			<div>
				<PanelFiltrado contentPaginator={contentPaginator}/>
				<TableContentPagination handleInitializeData={this.props.handleInitializeData} headers={HeadersListDefinitions.getHeadersClientList()} contentPaginator={contentPaginator} actions={ActionListDefinitions.getActionClientList()}/>
			</div>
		);
	}
}

export default ClienteListadoFormBody;
