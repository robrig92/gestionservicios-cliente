
class ActionListDefinitions{
	
	static getActionClientList(){
		return ([ {
					action:'Detalle',
					icon: "nombre",
					url: "http://localhost:3000/cliente/detalle/"
				},
				{
					action:'Editar',
					icon: "nombre",
					url: "http://localhost:3000/cliente/editar/"
				}
			]);
	}

}

export default ActionListDefinitions;