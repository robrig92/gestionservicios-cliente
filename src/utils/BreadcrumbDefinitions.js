class BreadcrumbDefinitions{
	
	static getBreadcrumbClientList(){
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
}

export default BreadcrumbDefinitions;
