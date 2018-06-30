import React, {Component} from 'react';
import { Pagination } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";


class TablePagination extends Component {
	constructor(props) {
	  super(props);
	  this.handlePaginationChange = this.handlePaginationChange.bind(this);
	  this.handleOnChange = this.handleOnChange.bind(this);
	}
	
	handleOnChange(e) {
		console.log("handleOnChange");
		this.props.handleInitializeData(e);
	}

	handlePaginationChange(e, { activePage }) {
		this.props.history.push('/cliente/listado?page=' + activePage );
	}

	render(){
		const { currentPage, totalPages } = this.props;
		return( 
			<Pagination 
			activePage={currentPage} 
			totalPages={totalPages} 
			onPageChange={this.handleOnChange}
			/>
		);

	}
}

export default withRouter(TablePagination);