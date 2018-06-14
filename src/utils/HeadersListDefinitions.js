class HeadersListDefinitions{
	
	static getHeadersClientList(){
		return ([ {
					header:'Nombre',
					path: "nombreContacto"
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
					path: "hashId"
				},
				{
					header:'Estatus',
					path: "enabled"
				}
			]);
	}
	
}

export default HeadersListDefinitions;

