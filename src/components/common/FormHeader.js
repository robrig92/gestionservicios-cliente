import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import FormTitle from './form/FormTitle';
import FormStatus from './form/FormStatus';
import CustomBreadcrumb from './CustomBreadcrumb';
import '../../style/CommonForm.css';

class FormHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, titleSec, status, breadcrumb } = this.props;
		return (
			<div className="FormHeader">
				<Grid>
					{
						breadcrumb?(
							<Grid.Row>
								<Grid.Column>
									 <CustomBreadcrumb breadcrumb={breadcrumb}/>
								</Grid.Column>
							</Grid.Row>
						):""
					}
				</Grid>
				<Grid columns={title && status ? 2 : 1}>
					<Grid.Row>
						<Grid.Column>
							{ title ? (<div className="ClienteAltaFormHeader-Title">
									<FormTitle
										title={title}
									/>
								</div>):""
							}
						</Grid.Column>
						<Grid.Column>
							{
								status?(
									<FormStatus status={ status ? "Activo" : "Inactivo"}/>
								):""
							}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default FormHeader;