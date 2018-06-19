class SectionBoardDefinitions{
	
	static getBoardUserAdministrator(){
		return ([ {
					sectionName:'Usuarios',
					sectionIcon: "user",
					links: [{ 
							name: "Alta de usuarios",
							href: "/usuario/alta"
					},
					{ 
							name: "Listado de usuarios",
							href: "/usuario/listado"
					}]
				},
				{
					sectionName:'Clientes',
					sectionIcon: "address book",
					links: [{ 
							name: "Alta de clientes",
							href: "/cliente/alta"
					},
					{ 
							name: "Listado de clientes",
							href: "/cliente/listado"
					}]
				},
				{
					sectionName:'Folios',
					sectionIcon: "sticky note",
					links: [{ 
							name: "Alta de folios",
							href: "/folio/alta"
					},
					{ 
							name: "Listado de folios",
							href: "/folio/listado"
					}]
				},
				{
					sectionName:'Tipo de dispositivos',
					sectionIcon: "tablet alternate",
					links: [{ 
							name: "Alta de tipo de dispositivos",
							href: "/tipodispositivo/alta"
					},
					{ 
							name: "Listado de tipos de dispositivos",
							href: "/tipodispositivo/listado"
					}]
				},
				{
					sectionName:'Marcas',
					sectionIcon: "barcode",
					links: [{ 
							name: "Alta de marcas",
							href: "/marca/alta"
					},
					{ 
							name: "Listado de marcas",
							href: "/marca/listado"
					}]
				},
				{
					sectionName:'Servicios',
					sectionIcon: "child",
					links: [{ 
							name: "Alta de servicios",
							href: "/servicio/alta"
					},
					{ 
							name: "Listado de marcas",
							href: "/servicio/listado"
					}]
				},
				{
					sectionName:'Permisos',
					sectionIcon: "eye",
					links: [{ 
							name: "Alta de permisos",
							href: "/permiso/alta"
					},
					{ 
							name: "Listado de permisos",
							href: "/permiso/listado"
					}]
				},
				{
					sectionName:'Notificacion',
					sectionIcon: "bullhorn",
					links: [{ 
							name: "Configuración de notificaciones",
							href: "/notificacion/configuracion/alta"
					}]
				}
			]);
	} 

}

export default SectionBoardDefinitions;