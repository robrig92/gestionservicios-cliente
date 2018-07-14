import React, {Component} from 'react';
import '../../../style/ClienteDetalle.css';
import '../../../style/CommonForm.css';
import { Table } from 'semantic-ui-react'

class ClienteDetalleFormBody extends Component{
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render(){
		const { cliente } = this.props;
		return(
			<div>
				<div>
						<h4>Dirección</h4>
				</div>
				<Table striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Calle</Table.Cell>
							<Table.Cell>{cliente.calle}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Colonia</Table.Cell>
							<Table.Cell>{cliente.colonia}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Municipio</Table.Cell>
							<Table.Cell>{cliente.municipio}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Estado</Table.Cell>
							<Table.Cell>{cliente.estado}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>Código Postal</Table.Cell>
							<Table.Cell>{cliente.codigoPostal}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>País</Table.Cell>
							<Table.Cell>México</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				<div>
						<h4>Contacto</h4>
				</div>
				<Table striped>
					<Table.Body>
						<Table.Row>
							<Table.Cell>Teléfono</Table.Cell>
							<Table.Cell>{cliente.telefono}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>RFC</Table.Cell>
							<Table.Cell>{cliente.rfc}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default ClienteDetalleFormBody;
