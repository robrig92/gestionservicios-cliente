import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import FormTitle from '../../common/form/FormTitle';
import FormStatus from '../../common/form/FormStatus';

class ClienteAltaFormHeader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="ClienteAltaFormHeader">
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column>
							<div className="ClienteAltaFormHeader-Title">
								<FormTitle
									title="Clientes"
									twoParts
									titleSec="Alta"/>
							</div>
						</Grid.Column>
						<Grid.Column>
							<FormStatus
								status="Activo"/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default ClienteAltaFormHeader;
