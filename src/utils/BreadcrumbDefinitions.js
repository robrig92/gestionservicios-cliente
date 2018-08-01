class BreadcrumbDefinitions{

	static getBreadcrumbClienteList(){
		return ([ {
					href:'',
					name: "Clientes",
					active: false
				},
				{
					href:'',
					name: "Listado",
					active: true
				},
			]);
	}

	static getBreadcrumbUsuarioList(){
		return ([ {
					href:'',
					name: "Usuarios",
					active: false
				},
				{
					href:'',
					name: "Listado",
					active: true
				},
			]);
	}

	static getBreadcrumbFolioList(){
		return ([ {
					href:'',
					name: "Folios",
					active: false
				},
				{
					href:'',
					name: "Listado",
					active: true
				},
			]);
	}
}

export default BreadcrumbDefinitions;
