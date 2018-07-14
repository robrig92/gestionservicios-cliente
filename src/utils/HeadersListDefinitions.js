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

	static getHeadersUsuarioList(){
		return ([ {
					header:'Nombre',
					path: "nombreContacto"
				},
				{
					header:'Email',
					path: "email"
				},
				{
					header:'ID',
					path: "hashId"
				},
				{
					header:'Rol',
					path: "rol.rol"
				},
				{
					header:'Fecha de creación',
					path: "created"
				}
			]);
	}
	
}

export default HeadersListDefinitions;

