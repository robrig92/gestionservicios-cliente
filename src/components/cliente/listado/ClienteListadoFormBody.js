import React, {Component} from 'react';
import TableContentPagination from '../../common/list/TableContentPagination';
import '../../../style/CommonForm.css';
import HeadersListDefinitions from '../../../utils/HeadersListDefinitions';
import ActionListDefinitions from '../../../utils/ActionListDefinitions';
import DataContentList from '../../../utils/DataContentList';


class ClienteListadoFormBody extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<TableContentPagination headers={HeadersListDefinitions.getHeadersClientList()} items={DataContentList.getContentClientList()} actions={ActionListDefinitions.getActionClientList()}/>
			</div>
		);
	}
}

export default ClienteListadoFormBody;