import React, {Component} from 'react'
import { Pagination } from 'semantic-ui-react'

class TablePagination extends Component {
	constructor(props) {
	  super(props);
	}
	
	render(){
		const { currentPage, totalPages } = this.props;
		return( 
			<Pagination defaultActivePage={currentPage} totalPages={totalPages} />
		);

	}
}

export default TablePagination;