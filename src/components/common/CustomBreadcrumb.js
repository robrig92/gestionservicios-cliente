import React, {Component} from 'react';
import { Breadcrumb } from 'semantic-ui-react'

class CustomBreadcrumb extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { breadcrumb } = this.props;
		return (
			<div>
				 <Breadcrumb size='huge'>
				 	 <Breadcrumb.Section href="\">Tablero</Breadcrumb.Section>
				 	 <Breadcrumb.Divider icon='right angle' />
				 	 { breadcrumb && breadcrumb.map( (item, key) => { return <span key={ key }> 
				 	 															<Breadcrumb.Section> {item.name} 
				 	 														 	</Breadcrumb.Section> 
																			 	{ !item.active ? <Breadcrumb.Divider icon='right angle' /> : "" }
																			 </span>
				 											} 
				 							)
				 	}
				 </Breadcrumb>
			</div>		
		);
	}
}

export default CustomBreadcrumb;