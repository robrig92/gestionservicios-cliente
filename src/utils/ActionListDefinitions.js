
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

}

export default ActionListDefinitions;