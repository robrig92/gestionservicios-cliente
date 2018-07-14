import React, {Component} from 'react'
import TableContentPagination from '../../common/list/TableContentPagination';
import PanelFiltrado from '../../common/list/PanelFiltrado';

import '../../../style/CommonForm.css';

import HeadersListDefinitions from '../../../utils/HeadersListDefinitions';
import ActionListDefinitions from '../../../utils/ActionListDefinitions';

class UsuarioListadoFormBody extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		const { contentPaginator } = this.props;
		return (
			<div>
				<PanelFiltrado contentPaginator={contentPaginator}/>
				<TableContentPagination handleInitializeData={this.props.handleInitializeData} headers={HeadersListDefinitions.getHeadersUsuarioList()} contentPaginator={contentPaginator} actions={ActionListDefinitions.getActionUsuarioList()}/>
			</div>
		);
	}

}

export default UsuarioListadoFormBody;