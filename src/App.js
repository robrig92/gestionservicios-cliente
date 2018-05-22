import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Home from './views/Home';
import ClienteAlta from './views/cliente/ClienteAlta';

class App extends Component {
  render() {
    return (
      <Router>
		  <div>
			  <Route exact path="/" component={Home} />
			  <Route path="/cliente/alta" component={ClienteAlta} />
		  </div>
	  </Router>
    );
  }
}

export default App;
