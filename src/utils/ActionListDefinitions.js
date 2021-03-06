
class ActionListDefinitions{

	static getActionClientList(){
		return ([ {
					action:'Detalle',
					icon: "nombre",
					type: "detalleCliente",
					url: "http://localhost:3000/cliente/detalle/"
				},
				{
					action:'Editar',
					icon: "nombre",
					type: "edicionCliente",
					url: "http://localhost:3000/cliente/editar/"
				}
			]);
	}

	static getActionUsuarioList(){
		return ([ {
					action:'Detalle',
					icon: "nombre",
					type: "detalleUsuario",
					url: "http://localhost:3000/usuario/detalle/"
				},
				{
					action:'Editar',
					icon: "nombre",
					type: "edicionUsuario",
					url: "http://localhost:3000/usuario/editar/"
				}
			]);
	}

	static getActionFolioList(){
		return ([ {
					action:'Detalle',
					icon: "nombre",
					type: "detalleFolio",
					url: "http://localhost:3000/folio/detalle/"
				},
				{
					action:'Editar',
					icon: "nombre",
					type: "edicionFolio",
					url: "http://localhost:3000/folio/editar/"
				}
			]);
	}

}

export default ActionListDefinitions;
