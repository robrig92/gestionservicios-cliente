import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AxiosRequest from '../../utils/AxiosRequest';
import ClienteTarjetaLeft from '../../components/cliente/tarjeta/ClienteTarjetaLeft';
import ClienteTarjetaRight from '../../components/cliente/tarjeta/ClienteTarjetaRight';

class ClienteTarjeta extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cliente: {}
		}
	}

	componentWillMount() {
		const mThis = this;
		const hashId = 'iReST99cK1TW8OHarkpRy8Hw71qcmMGtWDXvgMWEaWakTTHk3CdEEgpwxy4eUsQ';
		AxiosRequest.client.get('/cliente/' + hashId)
		.then(function(result) {
			var cliente = result.data[0];
			mThis.setState({
				cliente
			});
		})
		.catch(function(error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div className="ui grid container">
				<div className="five wide column">
					<ClienteTarjetaLeft cliente={this.state.cliente}/>
				</div>
				<div className="eight wide column">
					<ClienteTarjetaRight cliente={this.state.cliente}/>
				</div>
			</div>
		);
	}
}

ClienteTarjeta.propTypes = {
	hashId: PropTypes.string.isRequired
};

export default ClienteTarjeta;
