import React, {Component} from 'react';

import BannerInfoUsuario from './BannerInfoUsuario';
import PanelSecciones from './PanelSecciones';
import SectionBoardDefinitions from '../../utils/SectionBoardDefinitions';


class Tablero extends Component{

	render(){
		return(
			<div>
				<BannerInfoUsuario nombreUsuario="Nombre de usuario." imagenUsuario="Sin imagen" />
				<PanelSecciones sectionData={SectionBoardDefinitions.getBoardUserAdministrator()}/>
			</div>
		);
	}

}
export default Tablero;