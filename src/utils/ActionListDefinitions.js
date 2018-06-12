
class ActionListDefinitions{
	
	static getActionClientList(){
		return ([ {
					action:'Detalle',
					icon: "nombre",
					url: "http://localhost:3000/cliente/detail/"
				},
				{
					action:'Editar',
					icon: "nombre",
					url: "http://localhost:3000/cliente/edit/"
				}
			]);
	}

}

export default ActionListDefinitions;