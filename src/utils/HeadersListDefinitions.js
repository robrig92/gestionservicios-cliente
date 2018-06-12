class HeadersListDefinitions{
	
	static getHeadersClientList(){
		return ([ {
					header:'Nombre',
					path: "nombre"
				},
				{
					header:'Razón Social',
					path: "razonSocial"
				},
				{
					header:'Teléfono',
					path: "telefono"
				},
				{
					header:'ID',
					path: "id"
				},
				{
					header:'Estatus',
					path: "estatus"
				}
			]);
	}
	
}

export default HeadersListDefinitions;

