import React, {Component} from 'react';
import '../index.css';
import Tablero from '../components/tablero/Tablero';

class Home extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Tablero/>
		);
	}
}

export default Home;
