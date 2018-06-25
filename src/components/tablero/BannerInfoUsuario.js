import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react'

class BannerInfoUsuario extends Component{
	
	constructor(props){
		super(props);

	}

	render(){
    	const { nombreUsuario, imagenUsuario } = this.props;
		return(
			<div className="ui large leaderboard banner-block">
				<div className="banner-info-user">
				    <Icon className="user huge circular" color="teal"/>
					<div className="banner">
						<span className="ui large header">Bienvenido</span><br />
						<span className="ui small header user">{nombreUsuario}</span><br />
					</div>
				</div>
			</div>
		);
	}

}
export default BannerInfoUsuario;