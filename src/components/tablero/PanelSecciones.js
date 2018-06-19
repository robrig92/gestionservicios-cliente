import React, {Component} from 'react';
import { Button,Card, Icon, Image, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class PanelSecciones extends Component{
	
	constructor(props){
		super(props);

	}

	render(){
		const { sectionData } = this.props;
		return(
			<div class="ui container fluid panel" className="panel-items">
				<Card.Group>
					{ sectionData && sectionData.map( (section, key) => {  
																			return	<Card>
																						<Card.Content  className="card-icon">
																							<div className="card-icon">
																						 		<Icon className={section.sectionIcon + " big circular"} color="teal"/>
																						 		<Card.Header><h2>{section.sectionName}</h2></Card.Header>
																							</div>
																						</Card.Content>
																						<Card.Content extra>
																							<List selection verticalAlign='middle'>
																								{section.links && section.links.map( ( link, key ) => {
																																						return <List.Item>
																																									<Link to={link.href}>{link.name}</Link>
																																								</List.Item>
																																					}

																								 									)
																								}
																							</List>
																						</Card.Content>
																					</Card>
			                                              				} 
			                              			)
			        }
				</Card.Group>
			</div>
		);
	}

}
export default PanelSecciones;