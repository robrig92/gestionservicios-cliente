import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Home from './views/Home';
import ClienteAlta from './views/cliente/ClienteAlta';
import ClienteListado from './views/cliente/ClienteListado';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <Router>
		  <div className="App">
			  <Route exact path="/" component={Home} />
			  <Route path="/cliente/alta" component={ClienteAlta} />
			  <Route path="/cliente/listado" component={ClienteListado} />

		  </div>
	  </Router>
    );
  }
}

export default App;
